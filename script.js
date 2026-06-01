// favicon
const svg = `
            <svg class="badgeFavicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <defs>

                    <!-- Gold Metall Verlauf -->
                    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#FFF4C2" />
                        <stop offset="35%" stop-color="#F7D35A" />
                        <stop offset="70%" stop-color="#D4A017" />
                        <stop offset="100%" stop-color="#9C6B00" />
                    </linearGradient>

                    <!-- Highlight -->
                    <radialGradient id="shine" cx="30%" cy="25%" r="70%">
                        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.55" />
                        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
                    </radialGradient>

                    <!-- Innerer Schatten -->
                    <radialGradient id="innerShade" cx="50%" cy="60%" r="75%">
                        <stop offset="0%" stop-color="#000" stop-opacity="0" />
                        <stop offset="100%" stop-color="#000" stop-opacity="0.35" />
                    </radialGradient>

                    <!-- Kantenverdunklung -->
                    <linearGradient id="edgeDark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#000" stop-opacity="0.15" />
                        <stop offset="100%" stop-color="#000" stop-opacity="0.35" />
                    </linearGradient>

                </defs>

                <!-- Außen-Badge -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#gold)" />

                <!-- Innerer Schatten -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#innerShade)" />

                <!-- Glanz -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#shine)" />

                <!-- Untere Tiefe -->
                <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#edgeDark)" />

                <!-- Innenrahmen -->
                <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="2.8" fill="none" stroke="#FFF6D0"
                    stroke-width="0.35" opacity="0.9" />

                <!-- Monogramm -->
                <g transform="skewX(-6) translate(0.2,0)">

                    <!-- Schatten -->
                    <g fill="#000" opacity="0.35" transform="translate(0.3,0.4)">
                        <path
                            d="M4.3 12 L6.2 4.8 L8.1 12 L7.3 12 L6.9 10.6 H5.7 L5.3 12 Z M6.1 9.4 H6.7 L6.4 8 Z" />
                        <path
                            d="M9.6 4.8 V12 H10.6 V9.8 L12.2 12 H13.2 L11.3 9.2 L13.1 4.8 H12.1 L10.6 7.6 V4.8 Z" />
                    </g>

                    <!-- Hauptschrift -->
                    <g fill="#111" stroke="#FFFFFF" stroke-width="0.45" paint-order="stroke"
                        stroke-linejoin="round">
                        <path
                            d="M4.3 12 L6.2 4.8 L8.1 12 L7.3 12 L6.9 10.6 H5.7 L5.3 12 Z M6.1 9.4 H6.7 L6.4 8 Z" />
                        <path
                            d="M9.6 4.8 V12 H10.6 V9.8 L12.2 12 H13.2 L11.3 9.2 L13.1 4.8 H12.1 L10.6 7.6 V4.8 Z" />
                    </g>

                </g>
            </svg>
        `;

const url = "data:image/svg+xml," + encodeURIComponent(svg);
document.querySelector("link[rel='icon']").href = url;


/* ###################################### */
document.addEventListener('DOMContentLoaded', () => {

    const CONFIG = {
        slideDuration: 4000,

        effects: ['none', 'fade', 'slide', 'wipe', 'blind', 'zoom-in', 'mosaic'],

        //Enter the names of all photos here. The photos must be in the img folder.
        images: [
            'img/f1.jpg',
            'img/f2.jpg',
            'img/f3.jpg',
            'img/f4.jpg',
            'img/f5.jpg',
            'img/f6.jpg',
            'img/f7.jpg',
            'img/f8jpg',
            'img/f9.jpg',
            'img/f10.jpg',
            'img/f11.jpg',
            'img/f12.jpg',
            'img/f13.jpg',
            'img/f14.jpg',
            'img/f15.jpg',
            'img/f16.jpg',
            'img/f17.jpg',
            'img/f18.jpg',
            'img/f19.jpg',
            'img/f20.jpg',
            'img/f21.jpg',
            'img/f22.jpg',
            'img/f23.jpg',
            'img/f24.jpg',
            'img/f25.jpg',
            'img/f26.jpg',
            'img/f27.jpg',
            'img/f28.jpg',
            'img/f29.jpg',
            'img/f30.jpg',
            'img/f31.jpg',
            'img/f32.jpg',
            'img/f33.jpg',
            'img/f34.jpg',
            'img/f35.jpg',
            'img/f36.jpg',
            'img/f37.jpg',
            'img/f38.jpg',
            'img/f39.jpg',
            'img/f40.jpg',
            'img/f41.jpg',
            'img/f42.jpg',
            'img/f43.jpg',
            'img/f44.jpg',
            'img/f45.jpg',
            'img/f46.jpg',
            'img/f47.jpg',
            'img/f48.jpg',
            'img/f49.jpg',
            'img/f50.jpg'
        ]
    };

    const startScreen = document.getElementById('startScreen');
    const startBtn = document.getElementById('startBtn');
    const slideshow = document.getElementById('slideshow');

    let images = [];
    let index = 0;
    let interval = null;
    let currentEffect = 'none';

    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function preloadNext() {
        for (let i = 1; i <= 3; i++) {
            const next = (index + i) % images.length;
            const img = new Image();
            img.src = images[next];
        }
    }

    // Creates a slide and adds the random effect as a CSS class.
    function createSlide(src, effectClass, isActive = false) {
        const slide = document.createElement('div');
        slide.className = `slide fx-${effectClass}`;

        if (isActive) {
            slide.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = src;

        slide.appendChild(img);
        return slide;
    }

    function showNext() {
        const oldSlide = slideshow.querySelector('.slide.active');
        index++;

        if (index >= images.length) {
            images = shuffle(CONFIG.images);
            index = 0;
        }

        // Select a random effect from the list.
        const randomIdx = Math.floor(Math.random() * CONFIG.effects.length);
        currentEffect = CONFIG.effects[randomIdx];

        // Create a new slide with the selected random effect.
        const newSlide = createSlide(images[index], currentEffect);
        slideshow.appendChild(newSlide);

        // Trigger for Animation
        setTimeout(() => {
            newSlide.classList.add('active');

            if (oldSlide) {
                oldSlide.classList.remove('active');
                oldSlide.classList.add('exit');
            }
        }, 50);

        // Delete the old image after the animation finishes.
        setTimeout(() => {
            if (oldSlide) oldSlide.remove();
        }, 2000);

        preloadNext();
    }

    function start() {
        if (interval) return;

        images = shuffle(CONFIG.images);
        index = 0;

        startScreen.style.display = 'none';
        slideshow.classList.add('active');

        // The first image starts with a fade from black.
        const first = createSlide(images[0], 'fade', true);
        slideshow.appendChild(first);

        preloadNext();
        interval = setInterval(showNext, CONFIG.slideDuration);

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log("Fullscreen blockiert: ", err);
            });
        }
    }

    function stop() {
        clearInterval(interval);
        interval = null;

        slideshow.innerHTML = '';
        slideshow.classList.remove('active');
        startScreen.style.display = 'flex';

        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }

    startBtn.addEventListener('click', start);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') stop();
    });
});

