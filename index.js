// Mobile navigation menu (hamburger toggle) — loaded on every page via <script src="index.js">

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavigation = document.querySelector('#mobile-navigation');
const mobileNavigationLinks = document.querySelectorAll('#mobile-navigation a');

if (mobileMenuToggle && mobileNavigation) {
    // Open/close helpers keep the button's aria-expanded/aria-label and the menu's visibility in sync
    const closeMobileNavigation = () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Open navigation');
        mobileNavigation.classList.remove('is-open');
    };

    const openMobileNavigation = () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.setAttribute('aria-label', 'Close navigation');
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