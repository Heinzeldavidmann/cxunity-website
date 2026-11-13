// Scroll-reveal: elements with .reveal animate in when they enter the viewport
(function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

// Active nav link: highlights the nav link matching the section currently in view
(function () {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!navLinks.length) return;

    const sectionIds = Array.from(navLinks).map((a) => a.getAttribute('href').slice(1));
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    const setActive = (id) => {
        navLinks.forEach((a) => {
            const matches = a.getAttribute('href') === '#' + id;
            a.classList.toggle('is-nav-active', matches);
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0,
        }
    );

    sections.forEach((s) => observer.observe(s));
})();

// Mobile navigation menu (hamburger toggle) — loaded on every page via <script src="index.js">

const isGerman = document.documentElement.lang === 'de';
const navLabelOpen = isGerman ? 'Navigation öffnen' : 'Open navigation';
const navLabelClose = isGerman ? 'Navigation schließen' : 'Close navigation';
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavigation = document.querySelector('#mobile-navigation');
const mobileNavigationLinks = document.querySelectorAll('#mobile-navigation a');

if (mobileMenuToggle && mobileNavigation) {
    // Open/close helpers keep the button's aria-expanded/aria-label and the menu's visibility in sync
    const closeMobileNavigation = () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', navLabelOpen);
        mobileNavigation.classList.remove('is-open');
    };

    const openMobileNavigation = () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.setAttribute('aria-label', navLabelClose);
        mobileNavigation.classList.add('is-open');
    };

    // Hamburger button toggles the menu open/closed
    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            closeMobileNavigation();
        } else {
            openMobileNavigation();
        }
    });

    // Clicking any link inside the menu closes it (so it doesn't stay open after navigating)
    mobileNavigationLinks.forEach((link) => {
        link.addEventListener('click', closeMobileNavigation);
    });

    // Esc key closes the menu
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileNavigation();
        }
    });

    // If the window is resized past the mobile breakpoint (700px), force-close the menu
    // so it doesn't stay stuck open when switching to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            closeMobileNavigation();
        }
    });
}
// Button hover: adds the two halves of the logo X (CX left, UX right) as decorative layers.
// Runs for buttons in the page and for buttons added later, such as the cookie banner.
(function () {
    const markup =
        '<span class="bx" aria-hidden="true">' +
        '<span class="bx-side bx-l"><span class="bx-fill"></span><span class="bx-chev"></span></span>' +
        '<span class="bx-side bx-r"><span class="bx-fill"></span><span class="bx-chev"></span></span>' +
        '</span>';

    function enhance(root) {
        root.querySelectorAll('.button:not([data-bx])').forEach((button) => {
            button.setAttribute('data-bx', '');
            button.insertAdjacentHTML('afterbegin', markup);
        });
    }

    enhance(document);
    new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    if (node.matches('.button')) enhance(node.parentNode);
                    else enhance(node);
                }
            });
        });
    }).observe(document.body, { childList: true, subtree: true });
})();

/* Hero-Logo: Nach dem Einflug (CSS) öffnet sich das X einmal für jedes Schlagwort,
   langsam und mit langen Pausen. Danach bleibt es ruhig; Hover öffnet es erneut.
   Solange die Schlagworte laufen, lässt sich die Bewegung anhalten (WCAG 2.2.2). */
(function () {
    var stage = document.querySelector('.hero-visual[data-words]');
    if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var words = stage.dataset.words.split('|');
    var xm = stage.querySelector('.xm');
    var halfL = xm.querySelector('.xm-l');
    var halfR = xm.querySelector('.xm-r');
    var word = xm.querySelector('.xm-word');
    var pauseBtn = stage.querySelector('.xm-pause');
    var MOVE = 1700, REST = 4500, HOLD = 3200;
    var paused = false, busy = false, index = 0;
    var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

    function setOpen(px) {
        halfL.style.transform = px ? 'translateX(' + (-px) + 'px)' : '';
        halfR.style.transform = px ? 'translateX(' + px + 'px)' : '';
    }

    async function show() {
        busy = true;
        var gap = Math.round(xm.offsetWidth * 0.64);   // immer gleich weit öffnen
        word.style.maxWidth = (gap - 36) + 'px';
        word.textContent = words[index % words.length];
        setOpen(gap / 2);
        await wait(MOVE * 0.75);
        word.classList.add('is-on');
        await wait(HOLD);
        word.classList.remove('is-on');
        await wait(550);
        setOpen(0);
        await wait(MOVE);
        index++;
        busy = false;
    }

    pauseBtn.addEventListener('click', function () {
        paused = !paused;
        pauseBtn.textContent = paused ? stage.dataset.play : stage.dataset.pause;
    });

    (async function () {
        await wait(3600);                       // Einflug abwarten
        pauseBtn.classList.remove('is-off');
        for (var n = 0; n < words.length; n++) {
            await wait(REST);
            while (paused) await wait(300);
            await show();
        }
        pauseBtn.classList.add('is-off');   // einmal durch, danach Ruhe
        if (window.matchMedia('(hover: hover)').matches) {
            xm.addEventListener('mouseenter', function () { if (!busy) show(); });
        }
    })();
})();
