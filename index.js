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

/* Hero „Die Lücke“: Der Hero bleibt stehen, der Leistungsbereich schiebt sich darüber.
   Wie weit er schon überdeckt ist, steuert alles: Zuerst blendet der Text aus, dann
   schließen sich die Logo-Hälften, bevor die Überdeckung sie erreicht.
   Bei reduzierter Bewegung bleibt der offene Zustand (CSS). */
(function () {
    var hero = document.querySelector('.hero-gap');
    var next = document.querySelector('.hero-stack > #focus');
    if (!hero || !next || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var header = document.querySelector('.site-header');
    var xm = hero.querySelector('.xm');
    var halfL = xm.querySelector('.xm-l');
    var halfR = xm.querySelector('.xm-r');
    var inner = hero.querySelector('.hero-gap-in');
    var ticking = false;
    var clamp = function (v) { return Math.min(1, Math.max(0, v)); };
    var ease = function (t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };

    function update() {
        ticking = false;
        var hdr = header ? header.offsetHeight : 0;
        hero.style.setProperty('--hdr', hdr + 'px');
        var H = hero.offsetHeight;
        // 0 = nichts überdeckt, 1 = Überdeckung hat die Mitte des Logos erreicht
        var covered = (hdr + H) - next.getBoundingClientRect().top;
        var logoMid = xm.getBoundingClientRect().top + xm.offsetHeight / 2;
        var p = clamp(covered / Math.max(1, (hdr + H) - logoMid));

        var D = Math.max(0, window.innerWidth / 2 - 28 - xm.offsetWidth / 2);
        var close = ease(clamp((p - 0.1) / 0.75));
        var d = (1 - close) * D;
        halfL.style.transform = 'translateX(' + (-d) + 'px)';
        halfR.style.transform = 'translateX(' + d + 'px)';

        var fade = clamp(p / 0.35);
        hero.style.setProperty('--in-o', 1 - fade);
        hero.style.setProperty('--in-y', (-30 * fade) + 'px');
        inner.classList.toggle('is-gone', fade >= 1);
        hero.style.setProperty('--tag-o', clamp(1 - close * 1.5));
    }

    function request() {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    update();
})();

/* Touch-Geräte haben kein Hover. Damit sie die Marken-Momente trotzdem sehen:
   - Hauptbuttons spielen den X-Effekt einmal, wenn sie zum ersten Mal ganz sichtbar
     sind, und beim Antippen.
   - Die Leistungskarte in der Bildschirmmitte zeigt ihren farbigen Chevron. */
(function () {
    if (window.matchMedia('(hover: hover)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-bx');

    function play(btn, hold) {
        btn.classList.add('is-x');
        clearTimeout(btn._xTimer);
        btn._xTimer = setTimeout(function () { btn.classList.remove('is-x'); }, hold);
    }

    var seen = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            seen.unobserve(e.target);
            setTimeout(function () { play(e.target, 2000); }, 500);
        });
    }, { threshold: 1, rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('main .button-primary').forEach(function (b) { seen.observe(b); });

    document.addEventListener('pointerdown', function (e) {
        var btn = e.target.closest && e.target.closest('.button');
        if (btn) play(btn, 1400);
    }, { passive: true });

    var near = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { e.target.classList.toggle('is-near', e.isIntersecting); });
    }, { rootMargin: '-42% 0px -42% 0px' });
    document.querySelectorAll('#focus .feature-card').forEach(function (c) { near.observe(c); });
})();

/* Perspektiven: „Ihr Nutzen“ per Klick/Antippen auf- und zuklappen.
   Auf Geräten mit Hover klappt es zusätzlich beim Überfahren auf (CSS). */
(function () {
    document.querySelectorAll('.perspective-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var card = btn.closest('.perspective');
            var open = card.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    });
})();
