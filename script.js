// ==========================================
// YOUTUBE VIDEOS (Featured links section)
// Put your actual YouTube video IDs here
// ==========================================
const youtubeVideos = [
    { id: "iWQ0vGXqfNE", title: "TEST - Math for SSC 2026" },
    { id: "M1G6UUiWIpk", title: "TEST - Physics SSC 2026" },
    { id: "05yTrZd3B5Y", title: "TEST - General Math SSC 2026" },
    { id: "bhBNEuCfhFQ", title: "TEST - SSC Math Test Exam Solution" },
    { id: "ZOBwm7xrJXQ", title: "TEST - SSC Biology Test Exam" },
    { id: "NqS4GLIa2OE", title: "TEST - General Math Tricks" }
];

// Pick 3 random videos (Fisher-Yates shuffle, first 3)
function pickVideos(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr.slice(0, 3);
}

// Main video played in the big player (local file from the video folder)
const mainVideo = {
    src: "video/jibgoto.mp4",
    title: "Featured Video Lesson"
};

// Build the video section: local main video + 3 clickable YouTube cards
// (cards open on YouTube in a new tab)
function loadVideoSection() {
    const mainPlayer = document.getElementById('mainPlayer');
    const mainVideoTitle = document.getElementById('mainVideoTitle');
    const videoGrid = document.getElementById('videoGrid');
    if (!mainPlayer || !mainVideoTitle || !videoGrid) return;

    // Main player shows the local video file
    const source = mainPlayer.querySelector('source');
    if (source) source.src = mainVideo.src;
    mainPlayer.load();
    mainVideoTitle.textContent = mainVideo.title;

    // Grid of 3 random YouTube cards (open on YouTube when clicked)
    const featured = pickVideos(youtubeVideos);
    videoGrid.innerHTML = '';
    featured.forEach((video) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML =
            '<img src="https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg" alt="' + video.title + '" loading="lazy">' +
            '<div class="video-card-info"><p>' + video.title + '</p></div>';

        card.addEventListener('click', () => {
            window.open('https://www.youtube.com/watch?v=' + video.id, '_blank');
        });

        videoGrid.appendChild(card);
    });
}

// ==========================================
// CUSTOM IMAGE GALLERY CONFIGURATION
// Put your local file paths (e.g. "myimage.jpg") or image URLs.
// Set featured: true on one image to make it the large bento tile.
// ==========================================
const galleryImages = [
    {
        src: "image/galary/gg4.jpeg",
        title: "Featured Academy Lesson",
        caption: "Moments from our online classes",
        tag: "Classes",
        featured: true
    },
    {
        src: "image/galary/gg3.jpeg",
        title: "Mentoring in Action",
        caption: "Tanver Ayan — guiding SSC students to success",
        tag: "Mentor"
    },
    {
        src: "image/galary/gg1.jpeg",
        title: "Interactive Study Session",
        caption: "Concept clearing in action",
        tag: "Student"
    }
];

// ==========================================
// FUNCTIONS TO LOAD CONTENT DYNAMICALLY
// ==========================================

// Lightbox (full-screen image viewer)
let galleryLightbox = null;

function ensureLightbox() {
    if (galleryLightbox) return;
    galleryLightbox = document.createElement('div');
    galleryLightbox.className = 'lightbox';
    galleryLightbox.innerHTML =
        '<span class="lightbox-close"><i class="fa-solid fa-xmark"></i></span>' +
        '<img class="lightbox-img" src="" alt="Gallery Image">' +
        '<div class="lightbox-caption"></div>';
    document.body.appendChild(galleryLightbox);

    galleryLightbox.addEventListener('click', function (e) {
        if (e.target === galleryLightbox || e.target.closest('.lightbox-close')) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(item) {
    ensureLightbox();
    galleryLightbox.querySelector('.lightbox-img').src = item.src;
    galleryLightbox.querySelector('.lightbox-caption').textContent = item.title + ' — ' + (item.caption || '');
    galleryLightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!galleryLightbox) return;
    galleryLightbox.classList.remove('open');
    document.body.style.overflow = '';
}

// Load Image Gallery
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    galleryImages.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card' + (item.featured ? ' featured' : '');

        card.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x450?text=Image+Not+Found'">
            ${item.tag ? '<span class="gallery-tag">' + item.tag + '</span>' : ''}
            <div class="card-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
            <div class="card-info">
                <h4>${item.title}</h4>
                <p>${item.caption || ''}</p>
            </div>
        `;

        card.addEventListener('click', function () { openLightbox(item); });
        galleryGrid.appendChild(card);
    });
}

// Animated demo quiz card (hero section)
const demoQuestions = [
    { q: "The chemical symbol of water is:", options: ["H₂O", "CO₂", "NaCl", "O₂"], correct: 0 },
    { q: "The value of sin 30° is:", options: ["1/2", "√3/2", "1", "0"], correct: 0 },
    { q: "The powerhouse of the cell is:", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], correct: 1 },
    { q: "The capital of Bangladesh is:", options: ["Chittagong", "Dhaka", "Khulna", "Rajshahi"], correct: 1 }
];

function initDemoQuizCard() {
    const qText = document.getElementById('demoQText');
    const optionsWrap = document.getElementById('demoOptions');
    const feedback = document.getElementById('demoFeedback');
    const progressFill = document.getElementById('demoProgressFill');
    if (!qText || !optionsWrap || !feedback || !progressFill) return;

    const demoQs = demoQuestions;
    let qi = 0;

    const optionButtons = [];
    for (let i = 0; i < 4; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'demo-option';
        btn.innerHTML = '<span class="demo-idx">' + String.fromCharCode(65 + i) + '</span><span class="opt-text"></span>';
        optionsWrap.appendChild(btn);
        optionButtons.push(btn);
    }

    function run() {
        const dq = demoQs[qi];
        qText.textContent = dq.q;
        feedback.textContent = 'Pick an answer to see it in action';
        feedback.className = 'demo-feedback';
        progressFill.style.width = (((qi + 1) / demoQs.length) * 100) + '%';

        optionButtons.forEach((el, i) => {
            el.className = 'demo-option';
            el.querySelector('.opt-text').textContent = dq.options[i];
        });

        let idx = 0;
        function selectNext() {
            if (idx === dq.correct) {
                const right = optionButtons[idx];
                right.classList.remove('demo-wrong');
                right.classList.add('demo-right');
                feedback.textContent = 'Correct! Moving to the next question...';
                feedback.className = 'demo-feedback demo-feedback-right';
                setTimeout(() => { qi = (qi + 1) % demoQs.length; run(); }, 2200);
                return;
            }
            optionButtons[idx].classList.add('demo-wrong');
            feedback.textContent = 'Not quite — watch how the correct answer is revealed...';
            idx++;
            setTimeout(selectNext, 650);
        }
        setTimeout(selectNext, 700);
    }

    run();
}

// Execute when page finishes loading
window.onload = function () {
    loadVideoSection();
    loadGallery();
    initDemoQuizCard();
};
// Mobile Navigation Toggle Logic
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
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

    // Close menu when clicking non-dropdown links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close if this is a dropdown parent link on mobile
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

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
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
    var link = dd.querySelector('.nav-link');
    link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            // Close other open dropdowns
            navDropdowns.forEach(function (other) {
                if (other !== dd) other.classList.remove('dropdown-open');
            });
            dd.classList.toggle('dropdown-open');
        }
    });
});

// How-to section scroll animation
var howtoCards = document.querySelectorAll('.howto-animate');
if (howtoCards.length > 0) {
    var howtoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                howtoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    howtoCards.forEach(function (card) {
        howtoObserver.observe(card);
    });
}