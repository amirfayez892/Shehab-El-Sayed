// Theme Switcher Logic
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('shehab_theme') || 'dark-theme';
htmlElement.className = savedTheme;
updateThemeIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark-theme')) {
        htmlElement.className = 'light-theme';
        localStorage.setItem('shehab_theme', 'light-theme');
        updateThemeIcon('light-theme');
    } else {
        htmlElement.className = 'dark-theme';
        localStorage.setItem('shehab_theme', 'dark-theme');
        updateThemeIcon('dark-theme');
    }
});

function updateThemeIcon(theme) {
    if (theme === 'light-theme') {
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
    }
}

// 🌐 Language Translation Dictionary (Arabic / English)
const translations = {
    ar: {
        badge: "طبيب الودن",
        navAbout: "عن شهاب",
        navTracks: "التراكات",
        navCollabs: "التعاونات",
        navLive: "الحفلات",
        btnListen: '<i class="fa-solid fa-play"></i> استمع للـ Vibing',
        heroTag: "ابن سيدي بشر — الإسكندرية (30 مارس 1999)",
        heroName: "شهاب السيد",
        heroTitle: '"شهاب الديب"',
        heroDesc: "رائد مزج موسيقى الـ Trap الهادئة مع ألحان الـ R&B السلسة في مشهد الراب المصري، ومبتكر حالة الـ Mood والـ Chill المفضلة للاسترخاء والقيادة.",
        heroBtn: '<i class="fa-solid fa-music"></i> استكشف التراكات',
        cardSub: "الانطلاقة الحقيقية",
        bio1Title: "الهوية والألقاب",
        bio1Desc: 'يُعرف بـ <strong>"طبيب الودن"</strong> و<strong>"شهاب الديب"</strong>. بدأ مشواره الفني على الإنترنت عام 2019 وحظي بإنتباه واسع بفضل كاريزما صوته واستخدامه المتقن لتقنية الـ Auto-Tune.',
        bio2Title: "الأسلوب الموسيقي",
        bio2Desc: 'دمج موسيقى التراپ (Trap) الهادئة مع ألحان الـ R&B السلسة، معتمداً على تهيئة "المود" أو الحالة المزاجية للمستمع التي أصبحت الخيار المفضل أثناء القيادة والاسترخاء.',
        bio3Title: "البداية والإنطلاقة",
        bio3Desc: 'انطلق بقوة عبر تراك "My Zone"، ثم أعقبها بأغنية "7asana" التي مزج فيها بين العربية والإنجليزية بطريقة مبتكرة أحدثت تفاعلاً واسعاً داخل المشهد.',
        tracksSub: "المكتبة الموسيقية",
        tracksTitle: "أشهر تراكات شهاب",
        searchPlaceholder: "بحث عن تراك...",
        track1: "عالعموم (3l3mom)",
        track2: "بوغاتي (Bugatti)",
        track3: "كازانوفا (Casanova)",
        track4: "جمارك (Gamarek)",
        track5: "ستاموني (Satamoni)",
        track6: "مشروع مرزمن (Mrzmn)",
        collabsSub: "الشبكة والموسيقى",
        collabsTitle: "التعاونات الموسيقية والمنتجين",
        collab1Title: "أبرز المنتجين (Producers)",
        collab1Desc: "تعاون مع كبار صناع الموسيقى مثل خالد (Khaled)، دي جي توتي (DJ Totti)، ومولوتوف (Molotof).",
        collab2Title: "تراكات ومشروعات مشتركة",
        collab2Desc: "شارك في أعمال وتراكات مشهورة مع ألفي (مشروع مرزمن) وعمر كيف وغيرهم.",
        liveSub: "المسرح والجمهور",
        liveTitle: "الحفلات والنشاط الحي",
        live1Tag: "الساحل الشمالي",
        live1Desc: "مشاركات وحفلات جماهيرية كبرى بالاشتراك مع عفروتو وديسكو مصر.",
        live2Tag: "القاهرة والإسكندرية",
        live2Desc: "حضور مسرحي قوي وتفاعل حي متواصل مع الجمهور والشباب.",
        footerTag: "المنصة المخصصة لاستعراض تجربة الموسيقى والأعمال",
        devText: "Designed & Developed by",
        playerSelect: "اختر تراكاً للاستماع"
    },
    en: {
        badge: "Ear Doctor",
        navAbout: "About Shehab",
        navTracks: "Tracks",
        navCollabs: "Collabs",
        navLive: "Live Shows",
        btnListen: '<i class="fa-solid fa-play"></i> Listen to Vibing',
        heroTag: "Sidi Bishr — Alexandria (Born March 30, 1999)",
        heroName: "Shehab El-Sayed",
        heroTitle: '"Shehab El-Deeb"',
        heroDesc: "Pioneer of blending chill Trap beats with smooth R&B melodies in the Egyptian Rap scene, creating the ultimate driving & relaxing mood.",
        heroBtn: '<i class="fa-solid fa-music"></i> Explore Tracks',
        cardSub: "Breakthrough Launch",
        bio1Title: "Identity & Titles",
        bio1Desc: 'Known as <strong>"Ear Doctor"</strong> and <strong>"Shehab El-Deeb"</strong>. Started his online career in 2019, quickly gaining fame for his unique vocals and Auto-Tune mastery.',
        bio2Title: "Musical Style",
        bio2Desc: 'Fuses chill Trap rhythms with smooth R&B tones, creating an immersive atmospheric vibe loved by fans for night drives and relaxation.',
        bio3Title: "The Beginning",
        bio3Desc: 'Broke into the scene with "My Zone", followed by "7asana", seamlessly mixing Arabic and English lyrics with immense popularity.',
        tracksSub: "Music Library",
        tracksTitle: "Popular Shehab Tracks",
        searchPlaceholder: "Search for a track...",
        track1: "3l3mom (On General)",
        track2: "Bugatti",
        track3: "Casanova",
        track4: "Gamarek (Customs)",
        track5: "Satamoni",
        track6: "Mrzmn EP Project",
        collabsSub: "Music Network",
        collabsTitle: "Collaborations & Producers",
        collab1Title: "Featured Producers",
        collab1Desc: "Collaborated with top hitmakers such as Khaled, DJ Totti, and Molotof.",
        collab2Title: "Joint Projects",
        collab2Desc: "Worked on iconic tracks and projects alongside Elfy (Mrzmn EP) and Omar Kif.",
        liveSub: "Stage & Crowd",
        liveTitle: "Concerts & Live Acts",
        live1Tag: "North Coast",
        live1Desc: "Massive concert appearances alongside Afroto and Disco Misr.",
        live2Tag: "Cairo & Alexandria",
        live2Desc: "Energetic live presence at major events like BRO Event at Family Park.",
        footerTag: "The official showcase platform for Shehab's music experience",
        devText: "Designed & Developed by",
        playerSelect: "Select a track to play"
    }
};

// Language Toggle Logic
const langToggleBtn = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
let currentLang = localStorage.getItem('shehab_lang') || 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('shehab_lang', lang);
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langLabel.innerText = lang === 'ar' ? 'EN' : 'عربي';

    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-key-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-key-placeholder');
        if (translations[lang][key]) {
            elem.placeholder = translations[lang][key];
        }
    });
}

langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// Initialize Language on Load
setLanguage(currentLang);

// Tracks Data
const tracksData = [
    { src: 'assets/audio/3l3mom.mp3', title: '3l3mom (عالعموم)', artist: 'Shehab', thumb: 'assets/images/3l3mom.jpg' },
    { src: 'assets/audio/bugatti.mp3', title: 'Bugatti (بوغاتي)', artist: 'Shehab', thumb: 'assets/images/bugatti.jpg' },
    { src: 'assets/audio/casanova.mp3', title: 'Casanova (كازانوفا)', artist: 'Shehab', thumb: 'assets/images/casanova.jpg' },
    { src: 'assets/audio/gamarek.mp3', title: 'Gamarek (جمارك)', artist: 'Shehab', thumb: 'assets/images/gamarek.jpg' },
    { src: 'assets/audio/satamoni.mp3', title: 'Satamoni (ستاموني)', artist: 'Shehab x DJ Totti', thumb: 'assets/images/satamoni.jpg' },
    { src: 'assets/audio/mrzmn.mp3', title: 'Mrzmn (مشروع مرزمن)', artist: 'Shehab x Elfy', thumb: 'assets/images/mrzmn.jpg' }
];

let currentTrackIndex = 0;

// Audio Player Control Elements
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');
const nowPlayingThumb = document.getElementById('nowPlayingThumb');
const seekBar = document.getElementById('seekBar');
const progressBarFill = document.getElementById('progressBarFill');
const currentTimeLabel = document.getElementById('currentTime');
const durationTimeLabel = document.getElementById('durationTime');
const eqBars = document.getElementById('eqBars');

function playAudio(src, title, artist, index) {
    if (index !== undefined) currentTrackIndex = index;
    const track = tracksData[currentTrackIndex] || { src, title, artist, thumb: `assets/images/${src.split('/').pop().replace('.mp3', '')}.jpg` };

    audio.src = track.src;
    nowPlayingTitle.innerText = track.title;
    nowPlayingArtist.innerText = track.artist;
    nowPlayingThumb.src = track.thumb;

    audio.play().then(() => {
        playIcon.className = "fa-solid fa-pause";
        eqBars.classList.add('playing');
    }).catch(err => {
        console.warn("Audio file missing: " + track.src);
    });
}

function togglePlay() {
    if (!audio.src) {
        playAudio(tracksData[0].src, tracksData[0].title, tracksData[0].artist, 0);
        return;
    }
    if (audio.paused) {
        audio.play();
        playIcon.className = "fa-solid fa-pause";
        eqBars.classList.add('playing');
    } else {
        audio.pause();
        playIcon.className = "fa-solid fa-play";
        eqBars.classList.remove('playing');
    }
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracksData.length;
    const track = tracksData[currentTrackIndex];
    playAudio(track.src, track.title, track.artist, currentTrackIndex);
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracksData.length) % tracksData.length;
    const track = tracksData[currentTrackIndex];
    playAudio(track.src, track.title, track.artist, currentTrackIndex);
}

function forward10() {
    if (!audio.src) return;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
}

function rewind10() {
    if (!audio.src) return;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
}

audio.addEventListener('ended', playNextTrack);

audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progressPercent;
    progressBarFill.style.width = `${progressPercent}%`;
    currentTimeLabel.innerText = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    durationTimeLabel.innerText = formatTime(audio.duration);
});

seekBar.addEventListener('input', () => {
    if (!audio.duration) return;
    const seekTo = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTo;
    progressBarFill.style.width = `${seekBar.value}%`;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function filterTracks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const trackCards = document.querySelectorAll('.track-card');

    trackCards.forEach(card => {
        const title = card.querySelector('.track-title').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}
