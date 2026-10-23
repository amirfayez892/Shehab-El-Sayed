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

// Tracks Dataset Array
const tracksData = [
    { src: 'assets/audio/3l3mom.mp3', title: 'عالعموم (3l3mom)', artist: 'Shehab', thumb: 'assets/images/3l3mom.jpg' },
    { src: 'assets/audio/bugatti.mp3', title: 'بوغاتي (Bugatti)', artist: 'Shehab', thumb: 'assets/images/bugatti.jpg' },
    { src: 'assets/audio/casanova.mp3', title: 'Casanova (كازانوفا)', artist: 'Shehab', thumb: 'assets/images/casanova.jpg' },
    { src: 'assets/audio/gamarek.mp3', title: 'جمارك (Gamarek)', artist: 'Shehab', thumb: 'assets/images/gamarek.jpg' },
    { src: 'assets/audio/satamoni.mp3', title: 'ستاموني (Satamoni)', artist: 'Shehab x DJ Totti', thumb: 'assets/images/satamoni.jpg' },
    { src: 'assets/audio/mrzmn.mp3', title: 'مشروع مرزمن (Mrzmn)', artist: 'Shehab x Elfy', thumb: 'assets/images/mrzmn.jpg' }
];

let currentTrackIndex = 0;

// Player Elements
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

// Play Specific Track by Index
function playAudio(src, title, artist, index) {
    if (index !== undefined) {
        currentTrackIndex = index;
    }
    
    const track = tracksData[currentTrackIndex] || { src, title, artist, thumb: `assets/images/${src.split('/').pop().replace('.mp3', '')}.jpg` };

    audio.src = track.src;
    nowPlayingTitle.innerText = track.title;
    nowPlayingArtist.innerText = track.artist;
    nowPlayingThumb.src = track.thumb;

    audio.play().then(() => {
        playIcon.className = "fa-solid fa-pause";
        eqBars.classList.add('playing');
    }).catch(err => {
        console.warn("تأكد من وجود الملف الصوتي: " + track.src);
        alert("قم بوضع ملف الصوت " + track.src + " داخل مجلد assets/audio لتسمعه فوراً!");
    });
}

// Toggle Play/Pause
function togglePlay() {
    if (!audio.src) {
        // Play first track if nothing is selected
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

// Next / Prev Track Controls
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

// Seek 10s Forward / Backward
function forward10() {
    if (!audio.src) return;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
}

function rewind10() {
    if (!audio.src) return;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
}

// Auto play next track when ended
audio.addEventListener('ended', () => {
    playNextTrack();
});

// Update Progress Bar & Timer
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

// Search Filter
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