
document.addEventListener('DOMContentLoaded', () => {

    const CONFIG = {
        slideDuration: 3500,

        // effects: ['fade'],

        //Enter the names of all photos here. The photos must be in the img folder.
        images: [
            'img/f1.jpg',
            'img/f2.jpg',
            'img/f3.jpg',
            'img/f4.jpg',
            'img/f5.jpg',
            'img/f6.jpg',
            'img/f7.jpg',
            'img/f8.jpg',
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
            'img/f50.jpg',
            'img/f51.jpg',
            'img/f52.jpg',
            'img/f53.jpg',
            'img/f54.jpg',
            'img/f55.jpg',
            'img/f56.jpg',
            'img/f57.jpg',
            'img/f58.jpg',
            'img/f59.jpg',
            'img/f60.jpg',
            'img/f61.jpg',
            'img/f62.jpg',
            'img/f63.jpg',
            'img/f64.jpg',
            'img/f65.jpg',
            'img/f66.jpg',
            'img/f67.jpg',
            'img/f68.jpg',
            'img/f69.jpg',
            'img/f70.jpg',
            'img/f71.jpg',
            'img/f72.jpg',
            'img/f73.jpg',
            'img/f74.jpg',
            'img/f75.jpg',
            'img/f76.jpg',
            'img/f77.jpg',
            'img/f78.jpg',
            'img/f79.jpg',
            'img/f80.jpg',
            'img/f81.jpg',
            'img/f82.jpg',
            'img/f83.jpg',
            'img/f84.jpg',
            'img/f85.jpg',
            'img/f86.jpg',
            'img/f87.jpg',
            'img/f88.jpg',
            'img/f89.jpg',
            'img/f90.jpg',
            'img/f91.jpg',
            'img/f92.jpg',
            'img/f93.jpg',
            'img/f94.jpg',
            'img/f95.jpg',
            'img/f96.jpg',
            'img/f97.jpg',
            'img/f98.jpg',
            'img/f99.jpg',
            'img/f100.jpg',
            'img/f101.jpg',
            'img/f102.jpg',
            'img/f103.jpg',
            'img/f104.jpg',
            'img/f105.jpg',
            'img/f106.jpg'
        ]
    };

    const startScreen = document.getElementById('startScreen');
    const startBtn = document.getElementById('startBtn');
    const slideshow = document.getElementById('slideshow');

    let images = [];
    let index = 0;
    let interval = null;

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

    function preloadFirstImage() {
        const img = new Image();
        img.src = CONFIG.images[0];
    }

    function showNext() {
        const oldSlide = slideshow.querySelector('.slide.active');
        index++;

        if (index >= images.length) {
            const firstImage = CONFIG.images[0];
            const rest = shuffle(CONFIG.images.slice(1));
            images = [firstImage, ...rest];
            index = 0;
        }

        // Create a new slide with fade effect.
        const newSlide = createSlide(images[index], 'fade');
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

        const firstImage = CONFIG.images[0];
        const rest = shuffle(CONFIG.images.slice(1));
        images = [firstImage, ...rest];
        index = 0;

        startScreen.style.display = 'none';
        slideshow.classList.add('active');

        // The first image starts with a fade from black.
        const first = createSlide(images[0], 'fade');
        slideshow.appendChild(first);

        setTimeout(() => {
            first.classList.add('active');
        }, 50);

        preloadNext();
        interval = setInterval(showNext, CONFIG.slideDuration);

        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log("Fullscreen blockiert: ", err);
            });
        }
    }

    preloadFirstImage();

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

