

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavigation = document.querySelector('#mobile-navigation');
const mobileNavigationLinks = document.querySelectorAll('#mobile-navigation a');

if (mobileMenuToggle && mobileNavigation) {
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

    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            closeMobileNavigation();
        } else {
            openMobileNavigation();
        }
    });

    mobileNavigationLinks.forEach((link) => {
        link.addEventListener('click', closeMobileNavigation);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileNavigation();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            closeMobileNavigation();
        }
    });
}