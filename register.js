// ==========================================
// REGISTER PAGE - MOBILE NAVIGATION
// ==========================================
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

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
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

// ==========================================
// STUDENT REGISTRATION FORM
// ==========================================
const registerForm = document.getElementById('registerForm');
const formStatus = document.getElementById('formStatus');

function isBangladeshPhone(value) {
    // Accept 01XXXXXXXXX (11 digits) or +8801XXXXXXXXX
    return /^(\+?880|0)1[3-9]\d{8}$/.test(value.replace(/[\s-]/g, ''));
}

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const phone = document.getElementById('studentPhone').value.trim();
    const target = document.getElementById('studentClass').value;
    const email = document.getElementById('studentEmail').value.trim();
    const note = document.getElementById('studentNote').value.trim();
    const subjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(cb => cb.value);

    // Validation
    if (name.length < 3) {
        formStatus.textContent = 'Please enter your full name (at least 3 characters).';
        formStatus.className = 'form-status error';
        return;
    }

    if (!isBangladeshPhone(phone)) {
        formStatus.textContent = 'Please enter a valid Bangladeshi phone number (e.g. 01712345678).';
        formStatus.className = 'form-status error';
        return;
    }

    if (!target) {
        formStatus.textContent = 'Please select your target exam.';
        formStatus.className = 'form-status error';
        return;
    }

    if (subjects.length === 0) {
        formStatus.textContent = 'Please select at least one subject.';
        formStatus.className = 'form-status error';
        return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formStatus.textContent = 'Please enter a valid email address (or leave it empty).';
        formStatus.className = 'form-status error';
        return;
    }

    // Build registration record
    const record = {
        name,
        phone,
        target,
        email: email || 'N/A',
        subjects,
        note: note || 'N/A',
        date: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' })
    };

    // Save to localStorage so you never lose registrations
    const registered = JSON.parse(localStorage.getItem('tbsRegisteredStudents') || '[]');
    registered.push(record);
    localStorage.setItem('tbsRegisteredStudents', JSON.stringify(registered));

    // Show success message
    formStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Registration successful, ${name.split(' ')[0]}! I will contact you on ${phone}.`;
    formStatus.className = 'form-status success';

    registerForm.reset();

    // Optionally open WhatsApp with the details prefilled
    // (change the number below to your own WhatsApp number)
    const ownerWhatsApp = '8801905446825';
    const message = `New Student Registration%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Target: ${encodeURIComponent(target)}%0A` +
        `Subjects: ${encodeURIComponent(subjects.join(', '))}%0A` +
        `Email: ${encodeURIComponent(email || 'N/A')}%0A` +
        `Note: ${encodeURIComponent(note || 'N/A')}`;

    setTimeout(() => {
        if (confirm('Registration saved! Send these details to me on WhatsApp?')) {
            window.open(`https://wa.me/${ownerWhatsApp}?text=${message}`, '_blank');
        }
    }, 800);
});