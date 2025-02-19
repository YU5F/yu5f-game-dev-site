(function() {
    emailjs.init(config.emailjs.publicKey);
})();

const translations = {
    tr: {
        "nav.home": "Ana Sayfa",
        "nav.about": "Hakkımda",
        "nav.projects": "Projeler",
        "nav.resume": "Özgeçmiş",
        "nav.contact": "İletişim",

        "home.title": "Yusuf Çetin",
        "home.subtitle": "Oyun Geliştirici",

        "about.title": "Hakkımda",
        "about.p1": "Yazılım dünyasında edindiğim web ve mobil geliştirme tecrübemi, tutkuyla bağlı olduğum oyun geliştirme alanına aktarıyorum. Son bir yıldır profesyonel bir oyun geliştirme ekibinin parçası olarak, çevik metodolojiler kullanarak farklı projelerde aktif rol aldım. Unity Engine'de uzmanlık kazanırken, paralel olarak kişisel projelerimle de kendimi geliştirmeye devam ediyorum.",
        "about.p2": "Güçlü problem çözme yeteneklerim ve yazılım geliştirme konusundaki geniş perspektifim, oyun geliştirme süreçlerine yenilikçi yaklaşımlar getirmemi sağlıyor. Öğrenmeye olan açlığım ve takım çalışmasına yatkınlığım, her projede daha iyisini başarmak için beni motive ediyor.",
        "about.p3": "Hedefim, oyun sektöründeki deneyimimi artırarak, kullanıcılara unutulmaz deneyimler yaşatan oyunlar geliştirmek ve bu alandaki uzmanlığımı sürekli geliştirmek.",

        "projects.title": "Projeler",
        "projects.viewProject": "Projeyi Gör",

        "projects.project1.title": "Deathmatch Survivor",
        "projects.project1.description": "A* pathfinding algoritması ve dinamik zorluk sistemi ile gelişmiş yapay zeka mekanikleri içeren bir top-down shooter oyunu geliştirdim. Performans optimizasyonu ve oyuncu deneyimi odaklı tasarım yaklaşımıyla, oyun ilerledikçe artan bir zorluk seviyesi sistemi oluşturdum.",
        "projects.project1.feature1": "Pathfinding",
        "projects.project1.feature2": "Dinamik Zorluk",

        "projects.project2.title": "404 The Game",
        "projects.project2.description": "48 saatlik Game Jam'de gameplay lead olarak, karmaşık fizik hesaplamaları içeren Forced Perspective ve Lazer yansıma sistemlerini tasarlayıp geliştirdim. Sıkı zaman kısıtlaması altında ekip koordinasyonunu sağlayarak, teknik zorlukları başarıyla çözdüm ve projeyi zamanında tamamladım.",
        "projects.project2.feature1": "Bulmaca oyunu",
        "projects.project2.feature2": "Forced Perspective mekaniği",
        "projects.project2.feature3": "Yansıtmalı Lazer mekaniği",

        "projects.project3.title": "Runner",
        "projects.project3.description": "Procedural level generation ve object pooling teknikleri kullanarak yüksek performanslı bir endless runner oyunu geliştirdim. Veri odaklı tasarım yaklaşımıyla oluşturduğum dinamik zorluk sistemi ve optimize edilmiş kod mimarisi sayesinde, mobil platformlarda akıcı bir oyun deneyimi sunmayı başardım.",
        "projects.project3.feature1": "Pattern ve kural bazlı, sonsuz dünya oluşumu",
        "projects.project3.feature2": "Optimizasyon için Object Pooling kullanımı",
        "projects.project3.feature3": "Gelişmiş skor sistemi",
        "projects.project3.feature4": "Dinamik zorluk",

        "resume.title": "Özgeçmiş",
        "resume.experience1.date": "2019 - 2020",
        "resume.experience1.title": "Stajyer Web Geliştirici",
        "resume.experience1.company": "C.E. Bilgisayar",
        "resume.experience1.resp1": "Responsive web tasarımı konusunda kendimi geliştirdim.",
        "resume.experience1.resp2": "Node.js ve MongoDB kullanarak backend sistemlerini oluşturdum.",
        "resume.experience1.resp3": "REST API entegrasyonu kullanan projeler geliştirdim.",
        "resume.experience1.resp4": "Flutter kullanarak kapsamlı proje geliştirdim.",

        "resume.experience2.date": "2021 - 2023",
        "resume.experience2.title": "Bilgisayar Programcılığı Öğrencisi",
        "resume.experience2.company": "Hacettepe Üniversitesi",
        "resume.experience2.resp1": "48 saatlik Global Game Jam'de 5 kişilik ekibimle geliştirdiğimiz proje, 15+ takım arasında 5. sırayı elde etti.",
        "resume.experience2.resp2": "C# ve Unity kullanarak 3+ oyun prototipi oluşturdum.",
        "resume.experience2.resp3": "Oyun fiziği ve optimizasyon konularında kendimi geliştirdim.",
        "resume.experience2.resp4": "Game Design Document (GDD) hazırlama konusunda deneyim kazandım.",

        "resume.experience3.date": "2024 - 2025",
        "resume.experience3.title": "Junior Oyun Geliştirici",
        "resume.experience3.company": "Carousel Game",
        "resume.experience3.resp1": "Unity Ads ve ironSource gibi reklam hizmetlerinin entegrasyonlarını gerçekleştirerek reklam gelirlerini %40 artırdım.",
        "resume.experience3.resp2": "SOLID prensiplerini uygulayarak sürdürülebilir kod mimarisi oluşturdum.",
        "resume.experience3.resp3": "Projenin IOS ortamına çıkış yapabilmesi için build alıp testler yaptım.",
        "resume.experience3.resp4": "Otomatize test süreçleri kurarak oyun stabilitesini artırdım, regresyon testleriyle hata oranını %40 düşürdüm.",
        "resume.experience3.resp5": "Scrum metodolojisiyle haftalık sprint'lerde belirlenen hedefleri %100 oranında tamamladım.",

        "contact.title": "İletişim",
        "contact.namePlaceholder": "Adınız",
        "contact.emailPlaceholder": "E-posta Adresiniz",
        "contact.messagePlaceholder": "Mesajınız",
        "contact.submitButton": "Gönder"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.resume": "Resume",
        "nav.contact": "Contact",

        "home.title": "Yusuf Çetin",
        "home.subtitle": "Game Developer",

        "about.title": "About Me",
        "about.p1": "I'm transferring my web and mobile development experience in the software world to game development, which I'm passionately committed to. For the past year, I've been actively involved in various projects as part of a professional game development team, using agile methodologies. While gaining expertise in Unity Engine, I continue to develop myself through personal projects.",
        "about.p2": "My strong problem-solving abilities and broad perspective on software development enable me to bring innovative approaches to game development processes. My hunger for learning and aptitude for teamwork motivate me to achieve better results in every project.",
        "about.p3": "My goal is to increase my experience in the gaming industry, develop games that provide unforgettable experiences to users, and continuously improve my expertise in this field.",

        "projects.title": "Projects",
        "projects.viewProject": "View Project",

        "projects.project1.title": "Deathmatch Survivor",
        "projects.project1.description": "I developed a top-down shooter game featuring advanced AI mechanics with A* pathfinding algorithm and dynamic difficulty system. With a focus on performance optimization and player experience-oriented design, I created an increasing difficulty level system as the game progresses.",
        "projects.project1.feature1": "Pathfinding",
        "projects.project1.feature2": "Dynamic Difficulty",

        "projects.project2.title": "404 The Game",
        "projects.project2.description": "As the gameplay lead in a 48-hour Game Jam, I designed and developed Forced Perspective and Laser reflection systems involving complex physics calculations. Under strict time constraints, I ensured team coordination, successfully solved technical challenges, and completed the project on time.",
        "projects.project2.feature1": "Puzzle game",
        "projects.project2.feature2": "Forced Perspective mechanics",
        "projects.project2.feature3": "Reflective Laser mechanics",

        "projects.project3.title": "Runner",
        "projects.project3.description": "I developed a high-performance endless runner game using procedural level generation and object pooling techniques. Through the dynamic difficulty system created with a data-driven design approach and optimized code architecture, I managed to deliver a smooth gaming experience on mobile platforms.",
        "projects.project3.feature1": "Pattern and rule-based endless world generation",
        "projects.project3.feature2": "Object Pooling for optimization",
        "projects.project3.feature3": "Advanced scoring system",
        "projects.project3.feature4": "Dynamic difficulty",

        "resume.title": "Resume",
        "resume.experience1.date": "2019 - 2020",
        "resume.experience1.title": "Intern Web Developer",
        "resume.experience1.company": "C.E. Bilgisayar",
        "resume.experience1.resp1": "Improved myself in responsive web design.",
        "resume.experience1.resp2": "Built backend systems using Node.js and MongoDB.",
        "resume.experience1.resp3": "Developed projects using REST API integration.",
        "resume.experience1.resp4": "Developed comprehensive project using Flutter.",

        "resume.experience2.date": "2021 - 2023",
        "resume.experience2.title": "Computer Programming Student",
        "resume.experience2.company": "Hacettepe University",
        "resume.experience2.resp1": "Our project developed with a team of 5 in the 48-hour Global Game Jam ranked 5th among 15+ teams.",
        "resume.experience2.resp2": "Created 3+ game prototypes using C# and Unity.",
        "resume.experience2.resp3": "Improved myself in game physics and optimization.",
        "resume.experience2.resp4": "Gained experience in preparing Game Design Documents (GDD).",

        "resume.experience3.date": "2024 - 2025",
        "resume.experience3.title": "Junior Game Developer",
        "resume.experience3.company": "Carousel Game",
        "resume.experience3.resp1": "Increased advertising revenue by 40% by implementing Unity Ads and ironSource integrations.",
        "resume.experience3.resp2": "Created sustainable code architecture by applying SOLID principles.",
        "resume.experience3.resp3": "Created builds and conducted tests for iOS platform deployment.",
        "resume.experience3.resp4": "Improved game stability by setting up automated test processes, reduced error rate by 40% with regression tests.",
        "resume.experience3.resp5": "Completed 100% of the goals set in weekly sprints using Scrum methodology.",

        "contact.title": "Contact",
        "contact.namePlaceholder": "Your Name",
        "contact.emailPlaceholder": "Your Email",
        "contact.messagePlaceholder": "Your Message",
        "contact.submitButton": "Send"
    }
};

let currentLang = 'tr';

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
    } else {
        // Set default language based on browser language
        const browserLang = navigator.language.split('-')[0];
        changeLanguage(browserLang === 'tr' ? 'tr' : 'en');
    }
});

// Smooth scroll navigation
document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const section = dot.dataset.section;
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active navigation elements
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            
            // Update nav dots
            const currentDot = document.querySelector(`.nav-dot[data-section="${sectionId}"]`);
            navDots.forEach(dot => dot.classList.remove('active'));
            currentDot.classList.add('active');
            
            // Update nav links
            const currentLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            currentLink.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Add smooth scroll to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
});

sections.forEach(section => observer.observe(section));

// Project card video hover functionality
document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('video');
    
    card.addEventListener('mouseenter', () => {
        if (video) {
            video.play();
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Loading durumunu göster
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Gönderiliyor...';
    button.disabled = true;

    const templateParams = {
        user_name: this.querySelector('[name="user_name"]').value,
        user_email: this.querySelector('[name="user_email"]').value,
        message: this.querySelector('[name="message"]').value
    };

    emailjs.send(config.emailjs.serviceId, config.emailjs.templateId, templateParams)
        .then(() => {
            alert('Mesajınız başarıyla gönderildi!');
            this.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Mesaj gönderilirken bir hata oluştu: ' + error.message);
        })
        .finally(() => {
            button.textContent = originalText;
            button.disabled = false;
        });
});