// Cookie consent banner + gate for Google Analytics.
// Loaded on every page via <script src="cookie-consent.js">. Google Analytics (gtag.js) is
// NEVER loaded until the visitor explicitly clicks "Accept" — required for GDPR/TTDSG compliance.
// See privacy.html section 5 for the legal explanation shown to visitors.
(function () {
    var GA_ID = 'G-5QMD7E1S3B';
    var STORAGE_KEY = 'cxunity_cookie_consent'; // localStorage key: 'accepted' | 'declined' | not set

    var isEnglish = document.documentElement.lang === 'en';

    // Banner copy in both languages, picked based on the page's <html lang="..">
    var text = isEnglish ? {
        title: 'Cookie settings',
        body: 'We use Google Analytics to understand how visitors use this website. This requires your consent. You can change your choice at any time via the link in the footer.',
        accept: 'Accept',
        decline: 'Decline',
        privacy: 'Privacy Policy'
    } : {
        title: 'Cookie-Einstellungen',
        body: 'Wir nutzen Google Analytics, um zu verstehen, wie Besucher diese Website nutzen. Dafür benötigen wir Ihre Einwilligung. Sie können Ihre Wahl jederzeit über den Link im Footer ändern.',
        accept: 'Akzeptieren',
        decline: 'Ablehnen',
        privacy: 'Datenschutzerklärung'
    };

    // Privacy policy link in the banner needs a different relative path from en/ subpages
    function getPrivacyHref() {
        var path = window.location.pathname;
        return path.indexOf('/en/') !== -1 ? '../privacy.html' : 'privacy.html';
    }

    // Injects the actual Google Analytics (gtag.js) script and fires the standard gtag calls.
    // Only ever called after the visitor has accepted (either just now, or on a past visit).
    function loadGoogleAnalytics() {
        if (window.__gaLoaded) return;
        window.__gaLoaded = true;

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);

        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(script);
    }

    // Reads the visitor's past choice from localStorage, if any ('accepted' / 'declined' / null)
    function getConsent() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    // Persists the visitor's choice so the banner doesn't show again on future visits
    function setConsent(value) {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch (e) {
            /* localStorage unavailable */
        }
    }

    // Fades the banner out, then removes it from the DOM once the CSS transition finishes
    function removeBanner(banner) {
        banner.classList.remove('is-visible');
        window.setTimeout(function () {
            if (banner.parentNode) banner.parentNode.removeChild(banner);
        }, 260);
    }

    // Builds and shows the banner (Accept/Decline buttons), wires up both button clicks.
    // Called both on first visit and when the visitor reopens it via "Cookie Settings" in the footer.
    function buildBanner() {
        var banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-live', 'polite');
        banner.setAttribute('aria-label', text.title);

        banner.innerHTML =
            '<div class="cookie-banner-card">' +
                '<div class="cookie-banner-text">' +
                    '<p class="cookie-banner-title">' + text.title + '</p>' +
                    '<p class="cookie-banner-body">' + text.body + ' <a href="' + getPrivacyHref() + '">' + text.privacy + '</a></p>' +
                '</div>' +
                '<div class="cookie-banner-actions">' +
                    '<button type="button" class="button button-secondary cookie-banner-decline">' + text.decline + '</button>' +
                    '<button type="button" class="button button-primary cookie-banner-accept">' + text.accept + '</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(banner);

        window.requestAnimationFrame(function () {
            banner.classList.add('is-visible');
        });

        banner.querySelector('.cookie-banner-accept').addEventListener('click', function () {
            setConsent('accepted');
            loadGoogleAnalytics();
            removeBanner(banner);
        });

        banner.querySelector('.cookie-banner-decline').addEventListener('click', function () {
            setConsent('declined');
            removeBanner(banner);
        });
    }

    // Entry point, runs immediately on page load: decides whether to load GA right away
    // (past "accepted"), stay silent (past "declined"), or show the banner (no choice yet)
    function init() {
        var consent = getConsent();

        if (consent === 'accepted') {
            loadGoogleAnalytics();
            return;
        }

        if (consent === 'declined') {
            return;
        }

        if (document.body) {
            buildBanner();
        } else {
            document.addEventListener('DOMContentLoaded', buildBanner);
        }
    }

    // Exposed globally so the "Cookie Settings" footer button (inline onclick, see any page's
    // <footer>) can reopen the banner even after a choice was already made
    window.cxunityOpenCookieSettings = function () {
        var existing = document.querySelector('.cookie-banner');
        if (existing) return;
        buildBanner();
    };

    init();
})();
