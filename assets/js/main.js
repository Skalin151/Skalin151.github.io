/*==================== PORTFOLIO GLOBAL FUNCTIONS ====================*/
function openPortfolioModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closePortfolioModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

/*==================== INITIALIZATION ON DOM LOAD ====================*/
document.addEventListener('DOMContentLoaded', () => {
    /*==================== TYPED JS ANIMATION ====================*/
    if (document.querySelector(".auto-input") && typeof Typed !== 'undefined') {
        new Typed(".auto-input", {
            strings: [
                "a Web Developer",
                "a Student",
                "a Creator",
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    }

    /*==================== AOS ANIMATION ====================*/
    if (typeof AOS !== 'undefined') {
        AOS.init({
            offset: 300,
            duration: 2000
        });
    }

    /*==================== CUSTOM CURSOR ====================*/
    const cursor = document.querySelector('.cursor');
    const trails = document.querySelectorAll('.cursor-trail');

    if (cursor) {
        let mouseX = 0;
        let mouseY = 0;
        let positions = [];

        for (let i = 0; i < 30; i++) {
            positions.push({ x: 0, y: 0 });
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';

            positions.unshift({ x: mouseX, y: mouseY });
            positions.pop();
        });

        function animateTrails() {
            trails.forEach((trail, index) => {
                const delay = (index + 1) * 4;
                const pos = positions[delay] || positions[positions.length - 1];

                trail.style.left = pos.x + 'px';
                trail.style.top = pos.y + 'px';

                const opacity = Math.max(0.1, 0.8 - (index * 0.12));
                trail.style.opacity = opacity;
            });

            requestAnimationFrame(animateTrails);
        }

        animateTrails();

        const clickableElements = document.querySelectorAll('a, button, .button, .nav__toggle, .services__button, .portfolio__button');

        clickableElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            trails.forEach(trail => trail.style.opacity = '0');
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    }

    /*==================== SERVICES MODALS ====================*/
    const serviceButtons = document.querySelectorAll('.services__button');
    const serviceModals = document.querySelectorAll('.services__modal');
    const serviceCloseButtons = document.querySelectorAll('.services__modal-close');

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceId = button.getAttribute('data-service');
            const modal = document.getElementById(`service-modal-${serviceId}`);
            if (modal) modal.classList.add('active');
        });
    });

    serviceCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.services__modal');
            if (modal) modal.classList.remove('active');
        });
    });

    serviceModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });

    /*==================== PORTFOLIO MODALS & LIGHTBOX ====================*/
    const portfolioModals = document.querySelectorAll('.portfolio__modal');
    const portfolioCloseButtons = document.querySelectorAll('.portfolio__modal-close');

    portfolioCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.portfolio__modal');
            if (modal) modal.classList.remove('active');
        });
    });

    portfolioModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });

    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = lightbox ? lightbox.querySelector('.image-lightbox__img') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.image-lightbox__close') : null;
    const lightboxPrev = lightbox ? lightbox.querySelector('.image-lightbox__prev') : null;
    const lightboxNext = lightbox ? lightbox.querySelector('.image-lightbox__next') : null;
    const lightboxCounter = lightbox ? lightbox.querySelector('.image-lightbox__counter') : null;

    let currentGalleryImages = [];
    let currentImageIndex = 0;

    function updateLightboxImage(index) {
        if (!currentGalleryImages || currentGalleryImages.length === 0) return;
        currentImageIndex = (index + currentGalleryImages.length) % currentGalleryImages.length;
        const img = currentGalleryImages[currentImageIndex];
        if (lightboxImg) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Enlarged Image';
        }

        if (lightboxCounter) {
            if (currentGalleryImages.length > 1) {
                lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentGalleryImages.length}`;
                lightboxCounter.style.display = 'block';
            } else {
                lightboxCounter.style.display = 'none';
            }
        }

        if (lightboxPrev && lightboxNext) {
            if (currentGalleryImages.length > 1) {
                lightboxPrev.style.display = 'flex';
                lightboxNext.style.display = 'flex';
            } else {
                lightboxPrev.style.display = 'none';
                lightboxNext.style.display = 'none';
            }
        }
    }

    if (lightbox && lightboxImg && lightboxClose) {
        document.querySelectorAll('.portfolio__modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('portfolio__modal-img')) {
                    e.stopPropagation();
                    currentGalleryImages = Array.from(modal.querySelectorAll('.portfolio__modal-img'));
                    const idx = currentGalleryImages.indexOf(e.target);
                    updateLightboxImage(idx >= 0 ? idx : 0);
                    lightbox.classList.add('active');
                }
            });
        });

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                updateLightboxImage(currentImageIndex - 1);
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                updateLightboxImage(currentImageIndex + 1);
            });
        }

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    lightbox.classList.remove('active');
                    e.stopPropagation();
                } else if (e.key === 'ArrowLeft') {
                    updateLightboxImage(currentImageIndex - 1);
                } else if (e.key === 'ArrowRight') {
                    updateLightboxImage(currentImageIndex + 1);
                }
            } else if (e.key === 'Escape') {
                portfolioModals.forEach(modal => modal.classList.remove('active'));
            }
        });
    }

    /*==================== MOBILE NAVIGATION MENU ====================*/
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    /*==================== SCROLL UP BUTTON ====================*/
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 350) {
                scrollUp.classList.add('show');
            } else {
                scrollUp.classList.remove('show');
            }
        });
    }
});