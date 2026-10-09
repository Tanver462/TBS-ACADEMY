export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages' });
  }

  try {
    const systemPrompt = {
      role: 'user',
      parts: [{
        text: `You are an expert SSC tutor for Bangladeshi students. 
        Always reply in Bengali (বাংলা) unless asked otherwise. 
        Use simple, encouraging language suitable for Class 9-10.
        Focus on: Math, Physics, Chemistry, Biology, General Knowledge.
        Keep answers concise but complete.`
      }]
    };

    const geminiMessages = [
      systemPrompt,
      ...messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }))
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: geminiMessages,
          generationConfig: {
            maxOutputTokens: 800,
            temperature: 0.7,
            topP: 0.9
          }
        })
      }
    );

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message || 'Gemini API error');
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text 
      || 'দুঃখিত, উত্তর দিতে পারলাম না। আবার চেষ্টা করুন।';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Gemini error:', err);
    return res.status(500).json({ error: 'সার্ভার ত্রুটি। পরে আবার চেষ্টা করুন।' });
  }
}