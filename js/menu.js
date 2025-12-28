'use strict';

function burgerMenu() {
    const burger = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const body = document.body;

    // Open menu
    function openMenu() {
        mobileMenu.classList.add('is-open');
        mobileMenuOverlay.classList.add('is-open');
        burger.classList.add('is-open');
        body.classList.add('menu-open');
    }

    // Close menu
    function closeMenu() {
        mobileMenu.classList.remove('is-open');
        mobileMenuOverlay.classList.remove('is-open');
        burger.classList.remove('is-open');
        body.classList.remove('menu-open');
    }

    // Toggle menu
    function toggleMenu() {
        if (mobileMenu.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Event listeners
    if (burger) {
        burger.addEventListener('click', toggleMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Close menu on window resize (if switching to desktop)
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024 && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });
}

burgerMenu();
