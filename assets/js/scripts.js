window.onload = function () {
    'use strict';

    // Deixa a primeiro seção com a altura da janela
    function bannerSetHeight() {
        document.getElementById('projects').style.height = window.innerHeight + 'px';
    }
    bannerSetHeight();
    window.onresize = () => { bannerSetHeight() };

    // Scroll suave
    function smoothScroll(el) {
        let target = document.querySelector(el.getAttribute('href'));

        el.onclick = function (event) {
            event.preventDefault();
            window.scroll({
                top: target.offsetTop - document.getElementById('header').offsetHeight,
                behavior: 'smooth'
            });
        };
    }
    document.querySelectorAll('#menu a').forEach(smoothScroll);


    // Botão flutuante que rola a página para o topo
    let btnScrollToTop = document.getElementById('btn-scroll-to-top');

    window.onscroll = function () {
        let firstSectionHeight = document.getElementById('projects').offsetHeight,
            headerHeight = document.getElementById('header').offsetHeight,
            topDistance = firstSectionHeight - headerHeight;

        if (window.scrollY >= topDistance) {
            btnScrollToTop.classList.remove('hidden');
        } else {
            btnScrollToTop.classList.add('hidden');
        }
    }
    btnScrollToTop.onclick = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Carouseis
    tns({
        container: '#carousel-projects',
        items: 1,
        autoplay: true,
        controls: false,
        navPosition: 'bottom',
        autoplayButton: false,
        mode: 'gallery'
    });

    if (window.innerWidth < 768) {
        tns({
            container: '#carousel-team',
            items: 1,
            autoplay: true,
            controls: false,
            navPosition: 'bottom',
            autoplayButton: false,
            responsive: {
                768: {
                    items: 3
                }

            }
        });
    }

    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    });

    // Add animation bindings to elements
    lax.addElements('#services svg', {
        scrollY: {
            scale: [
                [0, 400],
                [0.25, 1]
            ],
            opacity: [
                [0, 400],
                [0, 1]
            ]
        }
    });

    lax.addElements('#services .container .service:first-child h3', {
        scrollY: {
            translateX: [
                [0, 400],
                [-100, 0]
            ]
        }
    });

    lax.addElements('#services .container .service:last-child h3', {
        scrollY: {
            translateX: [
                [0, 400],
                [100, 0]
            ]
        }
    });

    lax.addElements('#services .container .service:first-child p', {
        scrollY: {
            translateX: [
                [0, 450],
                [-200, 0]
            ]
        }
    });

    lax.addElements('#services .container .service:last-child p', {
        scrollY: {
            translateX: [
                [0, 450],
                [200, 0]
            ]
        }
    });

    lax.addElements('label[for="contact-name"]', {
        scrollY: {
            translateX: [
                [0, 1500],
                [200, 0]
            ]
        }
    });

    lax.addElements('label[for="contact-email"]', {
        scrollY: {
            translateX: [
                [0, 1600],
                [200, 0]
            ]
        }
    });

    lax.addElements('label[for="contact-message"]', {
        scrollY: {
            translateX: [
                [0, 1700],
                [200, 0]
            ]
        }
    });
}