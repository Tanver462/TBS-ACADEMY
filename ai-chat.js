// ==========================================
// AI CHAT WIDGET (Gemini 1.5 Flash)
// Works with Vercel serverless function /api/chat
// ==========================================

(function () {
  'use strict';

  const fab = document.createElement('button');
  fab.id = 'ai-fab';
  fab.innerHTML = '<i class="fa-solid fa-robot"></i>';
  fab.title = 'AI টিউটর (Ctrl+Shift+A)';
  fab.setAttribute('aria-label', 'AI টিউটর খুলুন');

  const panel = document.createElement('div');
  panel.id = 'ai-panel';
  panel.innerHTML = `
    <div class="ai-header">
      <h3><i class="fa-solid fa-robot"></i> AI টিউটর</h3>
      <button id="ai-close" aria-label="বন্ধ"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="ai-messages" id="ai-messages"></div>
    <div class="ai-input-wrap">
      <input type="text" id="ai-input" placeholder="প্রশ্ন লিখুন... (Ctrl+Enter পাঠাতে)" autocomplete="off">
      <button id="ai-send"><i class="fa-solid fa-paper-plane"></i></button>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #ai-fab { position:fixed; bottom:24px; right:24px; width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg,#8b5cf6,#a855f7); border:none; color:#fff; font-size:1.5rem; cursor:pointer; box-shadow:0 8px 24px rgba(139,92,246,0.4); z-index:9998; display:flex; align-items:center; justify-content:center; transition:transform .3s, box-shadow .3s; }
    #ai-fab:hover { transform:scale(1.08); box-shadow:0 12px 32px rgba(139,92,246,0.5); }
    #ai-fab:focus-visible { outline:3px solid #a855f7; outline-offset:3px; }

    #ai-panel { position:fixed; bottom:96px; right:24px; width:380px; max-height:520px; background:#0f172a; border:1px solid #334155; border-radius:16px; box-shadow:0 20px 48px rgba(0,0,0,.5); z-index:9999; display:none; flex-direction:column; overflow:hidden; font-family:'Poppins','Noto Sans Bengali',sans-serif; }
    #ai-panel.open { display:flex; animation:aiSlide .3s ease; }
    @keyframes aiSlide { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

    .ai-header { display:flex; justify-content:space-between; align-items:center; padding:14px 16px; border-bottom:1px solid #334155; background:linear-gradient(135deg,#1e293b,#0f172a); }
    .ai-header h3 { margin:0; color:#a855f7; font-size:1rem; display:flex; align-items:center; gap:8px; }
    .ai-header button { background:none; border:none; color:#94a3b8; font-size:1.1rem; cursor:pointer; padding:4px; }
    .ai-header button:hover { color:#f8fafc; }

    .ai-messages { flex:1; overflow-y:auto; padding:12px 16px; display:flex; flex-direction:column; gap:12px; }
    .ai-msg { max-width:85%; padding:10px 14px; border-radius:12px; font-size:.9rem; line-height:1.5; animation:fadeIn .2s; }
    .ai-msg.user { align-self:flex-end; background:linear-gradient(135deg,#8b5cf6,#a855f7); color:#fff; border-bottom-right-radius:4px; }
    .ai-msg.bot { align-self:flex-start; background:#1e293b; border:1px solid #334155; color:#cbd5e1; border-bottom-left-radius:4px; }
    .ai-msg.bot .meta { font-size:.65rem; color:#64748b; margin-top:4px; display:flex; align-items:center; gap:6px; }

    .ai-input-wrap { display:flex; gap:8px; padding:12px 16px; border-top:1px solid #334155; }
    #ai-input { flex:1; padding:12px 14px; border-radius:10px; border:1px solid #334155; background:#1e293b; color:#f8fafc; font-size:.9rem; font-family:inherit; outline:none; transition:border-color .2s, box-shadow .2s; }
    #ai-input:focus { border-color:#8b5cf6; box-shadow:0 0 0 3px rgba(139,92,246,.2); }
    #ai-input::placeholder { color:#64748b; }
    #ai-send { width:44px; height:44px; border-radius:10px; background:linear-gradient(135deg,#8b5cf6,#a855f7); border:none; color:#fff; font-size:1.1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:transform .2s; }
    #ai-send:hover { transform:scale(1.05); }
    #ai-send:focus-visible { outline:3px solid #a855f7; outline-offset:2px; }

    @media (max-width:420px) { 
      #ai-panel { width:calc(100%-32px); right:16px; left:16px; max-height:70vh; } 
      #ai-fab { bottom:16px; right:16px; } 
    }
  `;

  let isOpen = false;
  let history = [];

  function init() {
    document.head.appendChild(style);
    document.body.appendChild(fab);
    document.body.appendChild(panel);

    // Add click handler to nav menu link if exists
    const aiToggle = document.getElementById('ai-chat-toggle');
    if (aiToggle) aiToggle.addEventListener('click', (e) => { e.preventDefault(); toggle(); });

    fab.addEventListener('click', toggle);
    panel.querySelector('#ai-close').addEventListener('click', close);
    panel.querySelector('#ai-send').addEventListener('click', send);
    panel.querySelector('#ai-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
      if (e.key === 'Escape') close();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (isOpen && !panel.contains(e.target) && !fab.contains(e.target) && !document.getElementById('ai-chat-toggle')?.contains(e.target)) close();
    });

    // Keyboard shortcut Ctrl+Shift+A
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        toggle();
        setTimeout(() => panel.querySelector('#ai-input').focus(), 100);
      }
    });

    // Welcome message
    addBotMsg('Hello! I\'m your AI Tutor. Ask me anything about SSC preparation — Math, Physics, Chemistry, Biology, or General Knowledge.');
  }

  function toggle() {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    if (isOpen) setTimeout(() => panel.querySelector('#ai-input').focus(), 100);
  }

  function close() { isOpen = false; panel.classList.remove('open'); }

  async function send() {
    const input = panel.querySelector('#ai-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    addUserMsg(text);
    showTyping();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...history, { role: 'user', content: text }] })
      });
      const data = await res.json();
      hideTyping();
      if (data.reply) {
        addBotMsg(data.reply);
        history.push({ role: 'user', content: text }, { role: 'assistant', content: data.reply });
        if (history.length > 20) history = history.slice(-20);
      } else {
        addBotMsg(data.error || 'ত্রুটি হয়েছে। আবার চেষ্টা করুন।');
      }
    } catch {
      hideTyping();
      addBotMsg('নেটওয়ার্ক ত্রুটি। ইন্টারনেট যাচাই করুন।');
    }
  }

  function addUserMsg(t) {
    const div = document.createElement('div');
    div.className = 'ai-msg user';
    div.textContent = t;
    panel.querySelector('#ai-messages').appendChild(div);
    scroll();
  }

  function addBotMsg(t) {
    const div = document.createElement('div');
    div.className = 'ai-msg bot';
    div.innerHTML = `${t}<div class="meta"><i class="fa-solid fa-robot"></i> Gemini 1.5 Flash</div>`;
    panel.querySelector('#ai-messages').appendChild(div);
    scroll();
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'ai-msg bot';
    div.id = 'ai-typing';
    div.innerHTML = '<span class="typing"><i class="fa-solid fa-robot"></i> লিখছে<span>.</span><span>.</span><span>.</span></div>';
    panel.querySelector('#ai-messages').appendChild(div);
    scroll();
  }

  function hideTyping() {
    const t = document.getElementById('ai-typing');
    if (t) t.remove();
  }

  function scroll() {
    const msgs = panel.querySelector('#ai-messages');
    msgs.scrollTop = msgs.scrollHeight;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
