// ==========================================
// QUIZ POOLS (5 practice exams, 20 questions each)
// Quiz-01: Math & Physics  |  Quiz-02: Chemistry & Biology
// Quiz-03: English & GK    |  Quiz-04: Mixed Set A  |  Quiz-05: Mixed Set B
// ==========================================
const quizPools = [
    {
        id: 1,
        title: "Quiz-01",
        description: "Mathematics & Physics Focus",
        questions: [
            { question: "The solution of 3x − 7 = 8 is:", options: ["3", "4", "5", "6"], answer: 2 },
            { question: "If a = 2 and b = 3, then a² + b² = ?", options: ["10", "11", "12", "13"], answer: 3 },
            { question: "The area of a triangle with base 10 cm and height 6 cm is:", options: ["30 cm²", "60 cm²", "16 cm²", "45 cm²"], answer: 0 },
            { question: "The value of 2³ × 2⁴ is:", options: ["128", "256", "512", "64"], answer: 0 },
            { question: "The circumference of a circle of radius 7 cm is (π = 22/7):", options: ["44 cm", "22 cm", "154 cm", "88 cm"], answer: 0 },
            { question: "The geometric mean of 4 and 9 is:", options: ["6", "6.5", "7", "36"], answer: 0 },
            { question: "log₁₀ 1000 equals:", options: ["2", "3", "4", "10"], answer: 1 },
            { question: "The value of sin 30° is:", options: ["1/2", "√3/2", "1", "0"], answer: 0 },
            { question: "The roots of x² − 5x + 6 = 0 are:", options: ["2 and 3", "1 and 6", "−2 and −3", "5 and 6"], answer: 0 },
            { question: "In a class of 40 students, if 25% are girls, the number of boys is:", options: ["30", "25", "10", "35"], answer: 0 },
            { question: "The SI unit of work is:", options: ["Joule", "Watt", "Newton", "Pascal"], answer: 0 },
            { question: "Acceleration due to gravity on the Earth's surface is about:", options: ["9.8 m/s²", "8.9 m/s²", "6.4 m/s²", "12 m/s²"], answer: 0 },
            { question: "The device used to measure electric current is:", options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"], answer: 1 },
            { question: "The frequency of a wave is measured in:", options: ["Hertz", "Newton", "Watt", "Ampere"], answer: 0 },
            { question: "Sound cannot travel through:", options: ["Air", "Water", "Vacuum", "Steel"], answer: 2 },
            { question: "The SI unit of pressure is:", options: ["Pascal", "Joule", "Newton", "Bar"], answer: 0 },
            { question: "A body moving at constant velocity has an acceleration of:", options: ["Zero", "Positive", "Negative", "Constant"], answer: 0 },
            { question: "The bending of light as it passes through a lens is called:", options: ["Reflection", "Refraction", "Diffraction", "Dispersion"], answer: 1 },
            { question: "The kinetic energy of a 2 kg body moving at 3 m/s is:", options: ["9 J", "6 J", "18 J", "12 J"], answer: 0 },
            { question: "According to Ohm's law, V = ?", options: ["IR", "I/R", "R/I", "I²R"], answer: 0 }
        ]
    },
    {
        id: 2,
        title: "Quiz-02",
        description: "Chemistry & Biology Focus",
        questions: [
            { question: "The atomic number of oxygen is:", options: ["6", "8", "16", "18"], answer: 1 },
            { question: "The gas essential for human respiration is:", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: 1 },
            { question: "Table salt is chemically known as:", options: ["Sodium chloride", "Potassium chloride", "Calcium carbonate", "Sodium carbonate"], answer: 0 },
            { question: "The most abundant gas in the Earth's atmosphere is:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], answer: 1 },
            { question: "The chemical formula of methane is:", options: ["CH₄", "C₂H₆", "CO₂", "C₆H₁₂O₆"], answer: 0 },
            { question: "In a neutral atom, the number of protons equals the number of:", options: ["Neutrons", "Electrons", "Nucleons", "Isotopes"], answer: 1 },
            { question: "Which of the following is a noble gas?", options: ["Helium", "Chlorine", "Hydrogen", "Sodium"], answer: 0 },
            { question: "The process of converting a liquid into vapour at its surface is called:", options: ["Boiling", "Evaporation", "Condensation", "Sublimation"], answer: 1 },
            { question: "A pH value less than 7 indicates:", options: ["Acidic solution", "Basic solution", "Neutral solution", "Pure water"], answer: 0 },
            { question: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Aluminium", "Zinc"], answer: 1 },
            { question: "The basic unit of life is:", options: ["Cell", "Atom", "Molecule", "Tissue"], answer: 0 },
            { question: "The genetic material of a cell is:", options: ["DNA", "RNA", "Protein", "Carbohydrate"], answer: 0 },
            { question: "The human heart has how many chambers?", options: ["2", "3", "4", "6"], answer: 2 },
            { question: "Red blood cells are produced in the:", options: ["Liver", "Bone marrow", "Spleen", "Kidney"], answer: 1 },
            { question: "The normal human body temperature is about:", options: ["35°C", "37°C", "39°C", "40°C"], answer: 1 },
            { question: "Green plants prepare their food by the process of:", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], answer: 1 },
            { question: "Which vitamin is known as the 'sunshine vitamin'?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: 2 },
            { question: "The smallest bone in the human body is the:", options: ["Stapes", "Femur", "Radius", "Tibia"], answer: 0 },
            { question: "Animals that give birth to young ones are called:", options: ["Oviparous", "Viviparous", "Amphibious", "Aquatic"], answer: 1 },
            { question: "The branch of science that deals with the study of plants is:", options: ["Zoology", "Botany", "Ecology", "Genetics"], answer: 1 }
        ]
    },
    {
        id: 3,
        title: "Quiz-03",
        description: "English & General Knowledge",
        questions: [
            { question: "Choose the correct plural form of 'child':", options: ["Childs", "Children", "Childes", "Childrens"], answer: 1 },
            { question: "The opposite of 'ancient' is:", options: ["Modern", "Old", "Historic", "Ancienter"], answer: 0 },
            { question: "Fill in the blank: 'She ____ to school every day.'", options: ["go", "goes", "going", "gone"], answer: 1 },
            { question: "Identify the adjective in: 'She bought a beautiful dress.'", options: ["She", "bought", "beautiful", "dress"], answer: 2 },
            { question: "'The train had already left' is an example of:", options: ["Simple past", "Past perfect", "Present perfect", "Past continuous"], answer: 1 },
            { question: "Choose the correct spelling:", options: ["Receipt", "Receipte", "Reciept", "Receit"], answer: 0 },
            { question: "The synonym of 'brave' is:", options: ["Cowardly", "Courageous", "Timid", "Weak"], answer: 1 },
            { question: "Complete the sentence: 'If I ____ you, I would accept the offer.'", options: ["am", "was", "were", "is"], answer: 2 },
            { question: "In the sentence 'He ran quickly', the adverb is:", options: ["He", "ran", "quickly", "He ran"], answer: 2 },
            { question: "The antonym of 'expand' is:", options: ["Increase", "Contract", "Grow", "Extend"], answer: 1 },
            { question: "The Independence Day of Bangladesh is:", options: ["16 December", "26 March", "14 December", "16 March"], answer: 1 },
            { question: "The longest river in Bangladesh is:", options: ["Padma", "Jamuna", "Meghna", "Surma"], answer: 1 },
            { question: "The national animal of Bangladesh is:", options: ["Tiger", "Lion", "Elephant", "Deer"], answer: 0 },
            { question: "The highest peak of Bangladesh is:", options: ["Keokradong", "Mowdok Mual", "Tajingdong", "Saka Haphong"], answer: 1 },
            { question: "The first President of Bangladesh was:", options: ["Sheikh Mujibur Rahman", "Ziaur Rahman", "H.M. Ershad", "Khandaker Moshtaque"], answer: 0 },
            { question: "The currency of Bangladesh is:", options: ["Rupee", "Taka", "Dollar", "Ringgit"], answer: 1 },
            { question: "Bangladesh gained independence in the year:", options: ["1947", "1971", "1975", "1990"], answer: 1 },
            { question: "The largest district of Bangladesh by area is:", options: ["Dhaka", "Rangamati", "Chittagong", "Barisal"], answer: 1 },
            { question: "The song 'Amar Sonar Bangla' was written by:", options: ["Kazi Nazrul Islam", "Rabindranath Tagore", "Jasimuddin", "Bankim Chandra"], answer: 1 },
            { question: "The national sport of Bangladesh is:", options: ["Cricket", "Football", "Kabaddi", "Hockey"], answer: 2 }
        ]
    },
    {
        id: 4,
        title: "Quiz-04",
        description: "Mixed Subjects - Set A",
        questions: [
            { question: "The value of 5! (5 factorial) is:", options: ["25", "60", "120", "125"], answer: 2 },
            { question: "If the angles of a triangle are in the ratio 2 : 3 : 4, the largest angle is:", options: ["60°", "80°", "90°", "100°"], answer: 1 },
            { question: "If x² − 9 = 0, the positive value of x is:", options: ["3", "4", "6", "9"], answer: 0 },
            { question: "The simple interest on Tk. 2000 at 5% per annum for 2 years is:", options: ["Tk. 100", "Tk. 200", "Tk. 300", "Tk. 400"], answer: 1 },
            { question: "The SI unit of energy is:", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 0 },
            { question: "The property of sound that depends on amplitude is:", options: ["Loudness", "Pitch", "Frequency", "Speed"], answer: 0 },
            { question: "A convex lens is also known as:", options: ["Converging lens", "Diverging lens", "Plane lens", "Concave lens"], answer: 0 },
            { question: "The instrument used to measure atmospheric pressure is:", options: ["Thermometer", "Barometer", "Hydrometer", "Ammeter"], answer: 1 },
            { question: "The chemical symbol of gold is:", options: ["Go", "Au", "Ag", "Gd"], answer: 1 },
            { question: "A salt is formed by the reaction of an acid with a:", options: ["Water", "Base", "Metal", "Gas"], answer: 1 },
            { question: "The hardest natural substance is:", options: ["Iron", "Diamond", "Gold", "Quartz"], answer: 1 },
            { question: "The number of hydrogen atoms in one molecule of H₂SO₄ is:", options: ["1", "2", "3", "4"], answer: 1 },
            { question: "The largest cell in the human body is the:", options: ["Ovum", "Sperm", "Red blood cell", "Nerve cell"], answer: 0 },
            { question: "Plants which trap and eat insects are called:", options: ["Parasitic", "Insectivorous", "Aquatic", "Epiphytic"], answer: 1 },
            { question: "The instrument used to listen to heart sounds is the:", options: ["Stethoscope", "Microscope", "Telescope", "Sphygmomanometer"], answer: 0 },
            { question: "The study of heredity and variation is called:", options: ["Ecology", "Genetics", "Anatomy", "Taxonomy"], answer: 1 },
            { question: "Choose the correct article: 'He is ____ honest man.'", options: ["a", "an", "the", "no article"], answer: 1 },
            { question: "The past tense of 'eat' is:", options: ["eated", "ate", "eaten", "eats"], answer: 1 },
            { question: "The river Padma is the main branch of which river?", options: ["Ganges", "Brahmaputra", "Meghna", "Jamuna"], answer: 0 },
            { question: "How many divisions are there in Bangladesh?", options: ["6", "7", "8", "10"], answer: 1 }
        ]
    },
    {
        id: 5,
        title: "Quiz-05",
        description: "Mixed Subjects - Set B",
        questions: [
            { question: "The product of the roots of x² − 5x + 6 = 0 is:", options: ["6", "5", "−6", "−5"], answer: 0 },
            { question: "A shopkeeper gains 20% by selling an item for Tk. 120. The cost price is:", options: ["Tk. 96", "Tk. 100", "Tk. 110", "Tk. 150"], answer: 1 },
            { question: "The value of cos 0° + sin 90° is:", options: ["0", "1", "2", "√2"], answer: 2 },
            { question: "The median of 3, 5, 7, 9, 11 is:", options: ["5", "7", "9", "11"], answer: 1 },
            { question: "The momentum of a 2 kg body moving at 5 m/s is:", options: ["5 kg·m/s", "7 kg·m/s", "10 kg·m/s", "20 kg·m/s"], answer: 2 },
            { question: "The primary colours of light are:", options: ["Red, Green, Blue", "Red, Yellow, Blue", "Green, Yellow, Blue", "Cyan, Magenta, Yellow"], answer: 0 },
            { question: "The unit of frequency is:", options: ["Hertz", "Decibel", "Watt", "Volt"], answer: 0 },
            { question: "When a bus suddenly stops, passengers fall forward because of:", options: ["Friction", "Inertia", "Gravity", "Momentum"], answer: 1 },
            { question: "The element with atomic number 1 is:", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], answer: 1 },
            { question: "The gas which turns lime water milky is:", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Chlorine"], answer: 2 },
            { question: "Sodium chloride is commonly known as:", options: ["Sugar", "Table salt", "Baking soda", "Chalk"], answer: 1 },
            { question: "The lightest element in the periodic table is:", options: ["Hydrogen", "Helium", "Lithium", "Oxygen"], answer: 0 },
            { question: "The part of the cell where protein synthesis occurs is the:", options: ["Ribosome", "Nucleus", "Mitochondria", "Vacuole"], answer: 0 },
            { question: "The kidneys belong to which body system?", options: ["Respiratory", "Excretory", "Digestive", "Circulatory"], answer: 1 },
            { question: "The normal resting pulse rate of an adult is about:", options: ["40-50", "60-80", "90-110", "120-140"], answer: 1 },
            { question: "The pigment which gives colour to the skin is:", options: ["Melanin", "Keratin", "Hemoglobin", "Chlorophyll"], answer: 0 },
            { question: "Choose the correct sentence:", options: ["They has done it.", "They have done it.", "They has did it.", "They have did it."], answer: 1 },
            { question: "The comparative form of 'good' is:", options: ["gooder", "better", "best", "more good"], answer: 1 },
            { question: "The national bird of Bangladesh is:", options: ["Dove", "Magpie Robin", "Mayna", "Crow"], answer: 1 },
            { question: "The national fish of Bangladesh is:", options: ["Rui", "Katla", "Hilsa", "Pabda"], answer: 2 }
        ]
    }
];

// ==========================================
// CATEGORY CONFIGURATION
// ==========================================
const categories = {
    class8: {
        title: '<i class="fa-solid fa-graduation-cap"></i> ক্লাস ৮ - MCQ কুইজ',
        desc: 'ক্লাস ৮ এর জন্য কুইজ শীঘ্রই আসছে।',
        empty: true
    },
    'class9-10': {
        title: '<i class="fa-solid fa-book-open"></i> ক্লাস ৯-১০ - MCQ প্র্যাকটিস এক্সাম',
        desc: 'নিচের যেকোনো একটি কুইজ বেছে নিন। প্রতিটিতে ২০টি প্রশ্ন ও ২০ মিনিট টাইমার আছে।',
        empty: false
    },
    ssc2027: {
        title: '<i class="fa-solid fa-award"></i> SSC 2027 - MCQ প্র্যাকটিস এক্সাম',
        desc: 'SSC 2027 পরীক্ষার প্রস্তুতির জন্য কুইজ বেছে নিন। প্রতিটিতে ২০টি প্রশ্ন ও ২০ মিনিট টাইমার আছে।',
        empty: false
    },
    ssc2028: {
        title: '<i class="fa-solid fa-fire"></i> SSC 2028 - MCQ প্র্যাকটিস এক্সাম',
        desc: 'SSC 2028 পরীক্ষার প্রস্তুতির জন্য কুইজ বেছে নিন। প্রতিটিতে ২০টি প্রশ্ন ও ২০ মিনিট টাইমার আছে।',
        empty: false
    }
};

function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || '';
}

function buildQuizCards(category) {
    const selection = document.getElementById('quizSelection');
    if (!selection) return;
    selection.innerHTML = '';

    quizPools.forEach(function (pool) {
        var icons = ['fa-file-lines', 'fa-flask', 'fa-language', 'fa-layer-group', 'fa-brain'];
        var icon = icons[pool.id - 1] || 'fa-file-lines';

        var card = document.createElement('div');
        card.className = 'quiz-card-select';
        card.setAttribute('data-quiz', pool.id);
        card.innerHTML =
            '<div class="quiz-select-header">' +
                '<i class="fa-solid ' + icon + '"></i>' +
                '<h3>' + pool.title + '</h3>' +
            '</div>' +
            '<p class="quiz-select-desc">' + pool.description + '</p>' +
            '<div class="quiz-select-meta">' +
                '<span><i class="fa-solid fa-question"></i> ২০ প্রশ্ন</span>' +
                '<span><i class="fa-solid fa-clock"></i> ২০ মিনিট</span>' +
            '</div>' +
            '<button class="btn primary-btn quiz-start-btn" data-quiz="' + pool.id + '">' +
                '<i class="fa-solid fa-play"></i> কুইজ শুরু করো' +
            '</button>';
        selection.appendChild(card);
    });

    var startBtns = selection.querySelectorAll('.quiz-start-btn');
    startBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            startQuiz(parseInt(btn.getAttribute('data-quiz'), 10));
        });
    });
}

// ==========================================
// QUIZ ENGINE  (Selection -> Start -> Take -> Result with full answer review)
// ==========================================
let quizState = {
    pool: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    startedAt: null,
    timerInterval: null,
    timeLeft: 20 * 60 // 20 minutes in seconds
};

function shuffleQuestions(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a;
}

function show(element) {
    if (element) element.style.display = '';
}

function autoHide(element) {
    if (element) element.style.display = 'none';
}

function showQuizHome() {
    show(document.getElementById('quizSelection'));
    autoHide(document.getElementById('quizTaking'));
    autoHide(document.getElementById('quizResult'));
}

function startQuiz(id) {
    const pool = quizPools.filter(function (p) { return p.id === id; })[0];
    if (!pool) return;

    if (quizState.timerInterval) clearInterval(quizState.timerInterval);

    quizState.pool = pool;
    quizState.questions = shuffleQuestions(pool.questions);
    quizState.currentIndex = 0;
    quizState.answers = new Array(quizState.questions.length).fill(null);
    quizState.timeLeft = 20 * 60;

    autoHide(document.getElementById('quizSelection'));
    autoHide(document.getElementById('quizResult'));
    show(document.getElementById('quizTaking'));

    renderQuestion();
    updateProgress();
    startTimer();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');

    questionText.textContent = 'Q' + (quizState.currentIndex + 1) + '. ' + q.question;
    optionsGrid.innerHTML = '';

    q.options.forEach(function (opt, i) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn' + (quizState.answers[quizState.currentIndex] === i ? ' selected' : '');
        btn.innerHTML = '<span class="option-label">' + String.fromCharCode(65 + i) + '</span> ' + opt;
        btn.addEventListener('click', function () { selectOption(i); });
        optionsGrid.appendChild(btn);
    });

    document.getElementById('prevBtn').disabled = quizState.currentIndex === 0;
    document.getElementById('nextBtn').innerHTML = quizState.currentIndex === quizState.questions.length - 1
        ? 'Submit Quiz <i class="fa-solid fa-check"></i>'
        : 'Next <i class="fa-solid fa-chevron-right"></i>';
}

function selectOption(index) {
    quizState.answers[quizState.currentIndex] = index;
    renderQuestion();
    updateProgress();
}

function nextQuestion() {
    if (quizState.currentIndex < quizState.questions.length - 1) {
        quizState.currentIndex++;
        renderQuestion();
        updateProgress();
    } else {
        submitQuiz();
    }
}

function prevQuestion() {
    if (quizState.currentIndex > 0) {
        quizState.currentIndex--;
        renderQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const total = quizState.questions.length;
    const answered = quizState.answers.filter(function (a) { return a !== null; }).length;
    document.getElementById('progressText').textContent =
        'Question ' + (quizState.currentIndex + 1) + ' of ' + total + ' | Answered: ' + answered + '/' + total;
    document.getElementById('progressFill').style.width = ((quizState.currentIndex + 1) / total) * 100 + '%';
}

function startTimer() {
    const timerEl = document.getElementById('quizTimer');
    clearInterval(quizState.timerInterval);
    quizState.startedAt = Date.now();
    quizState.timerInterval = setInterval(function () {
        quizState.timeLeft--;
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timerInterval);
            quizState.timerInterval = null;
            timerEl.textContent = '00:00';
            submitQuiz();
            return;
        }
        const m = Math.floor(quizState.timeLeft / 60);
        const s = quizState.timeLeft % 60;
        timerEl.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        timerEl.style.color = quizState.timeLeft <= 60 ? '#f87171' : '#38bdf8';
    }, 1000);
}

function submitQuiz() {
    if (quizState.timerInterval) {
        clearInterval(quizState.timerInterval);
        quizState.timerInterval = null;
    }
    let score = 0;
    quizState.questions.forEach(function (q, i) {
        if (quizState.answers[i] === q.answer) score++;
    });

    const total = quizState.questions.length;
    const percent = Math.round((score / total) * 100);
    const passed = percent >= 50;

    document.getElementById('scorePercent').textContent = percent + '%';
    document.getElementById('scoreValue').textContent = score + ' / ' + total;
    document.getElementById('scoreText').innerHTML =
        'You scored <strong>' + score + '</strong> out of ' + total + ' (' + percent + '%) — ' + (passed ? 'Well done!' : 'Keep practising!');

    const circle = document.getElementById('scoreCircle');
    circle.style.setProperty('--score', percent);
    circle.style.background = 'conic-gradient(' + (passed ? '#22c55e' : '#f87171') + ' calc(var(--score, 0) * 3.6deg), #334155 0)';
    document.getElementById('scorePercent').style.color = passed ? '#22c55e' : '#f87171';

    autoHide(document.getElementById('quizTaking'));
    autoHide(document.getElementById('quizSelection'));
    show(document.getElementById('quizResult'));

    buildReviewList();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildReviewList() {
    const list = document.getElementById('reviewList');
    if (!list) return;
    list.innerHTML = '';

    quizState.questions.forEach(function (q, i) {
        const userAns = quizState.answers[i];
        const isCorrect = userAns === q.answer;

        let stateTag;
        if (userAns === null) {
            stateTag = '<span class="review-state skipped">Not Answered</span>';
        } else if (isCorrect) {
            stateTag = '<span class="review-state right">Correct</span>';
        } else {
            stateTag = '<span class="review-state wrong">Wrong</span>';
        }

        let optsHtml = '';
        q.options.forEach(function (opt, oi) {
            let cls = 'review-option';
            let tag = '';
            if (oi === q.answer) {
                cls += ' right-opt';
                tag = '<span class="review-tag">Correct Answer</span>';
            }
            if (oi === userAns && userAns !== null) {
                if (isCorrect) {
                    cls += ' selected-opt';
                } else {
                    cls += ' selected-opt wrong-opt';
                    tag = '<span class="review-tag">Your Answer (Wrong)</span>';
                }
            }
            optsHtml +=
                '<div class="' + cls + '">' +
                    '<span class="option-label">' + String.fromCharCode(65 + oi) + '</span>' +
                    '<span class="opt-text">' + opt + '</span>' +
                    tag +
                '</div>';
        });

        const item = document.createElement('div');
        item.className = 'review-item' + (isCorrect ? ' correct' : (userAns === null ? ' skipped' : ' wrong'));
        item.innerHTML =
            '<div class="review-question">' +
                '<span class="review-num">Q' + (i + 1) + '</span> ' + q.question + ' ' + stateTag +
            '</div>' + optsHtml;
        list.appendChild(item);
    });
}

function tryAnotherQuiz() {
    showQuizHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reviewAllAnswers() {
    const list = document.getElementById('reviewList');
    if (list) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Initialize on page load
window.onload = function () {
    var cat = getCategoryFromURL();
    var catConfig = categories[cat];

    var titleEl = document.getElementById('quizCategoryTitle');
    var descEl = document.getElementById('quizCategoryDesc');
    var comingSoon = document.getElementById('quizComingSoon');
    var selection = document.getElementById('quizSelection');

    if (catConfig) {
        if (titleEl) titleEl.innerHTML = catConfig.title;
        if (descEl) descEl.textContent = catConfig.desc;

        if (catConfig.empty) {
            if (comingSoon) comingSoon.style.display = '';
            if (selection) selection.style.display = 'none';
        } else {
            if (comingSoon) comingSoon.style.display = 'none';
            if (selection) selection.style.display = '';
            buildQuizCards(cat);
        }
    } else {
        // No category selected — show all quizzes (default view)
        if (titleEl) titleEl.innerHTML = '<i class="fa-solid fa-clipboard-question"></i> MCQ Practice Exams';
        if (descEl) descEl.textContent = 'Choose a practice exam below. Each contains 20 SSC-level questions with a 20-minute timer.';
        if (comingSoon) comingSoon.style.display = 'none';
        if (selection) selection.style.display = '';
        buildQuizCards(cat);
    }

    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var retryBtn = document.getElementById('retryBtn');
    var reviewBtn = document.getElementById('reviewBtn');

    if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (retryBtn) retryBtn.addEventListener('click', tryAnotherQuiz);
    if (reviewBtn) reviewBtn.addEventListener('click', reviewAllAnswers);

    showQuizHome();
};

// Mobile Navigation Toggle Logic
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');

        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768 && link.closest('.nav-dropdown')) {
                return;
            }
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
}

// Mobile dropdown toggle
var navDropdowns = document.querySelectorAll('.nav-dropdown');
navDropdowns.forEach(function (dd) {
    dd.querySelector('.nav-link').addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            navDropdowns.forEach(function (other) {
                if (other !== dd) other.classList.remove('dropdown-open');
            });
            dd.classList.toggle('dropdown-open');
        }
    });
});