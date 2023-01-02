window.onload = function () {
    'use strict';

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
    window.addEventListener('scroll', () => {
        let btn = document.getElementById('btn-scroll-to-top');
        let initialScrollCondition = window.scrollY < 200;
        let finalScrollCondition = (window.scrollY + window.innerHeight + 50) >= (document.body.clientHeight);

        btn.addEventListener('click', () => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });

        btn.classList = initialScrollCondition || finalScrollCondition ? 'hidden' : '';
    });

    // Carousel de projetos
    tns({
        container: '#carousel-projects',
        items: 1,
        autoplay: true,
        speed: 350,
        autoplayTimeout: 3500,
        controls: false,
        navPosition: 'bottom',
        autoplayButton: false,
        mode: 'gallery'
    });

    // Carousel de equipe
    if (window.innerWidth < 768) {
        tns({
            container: '#carousel-team',
            items: 1,
            autoplay: true,
            speed: 350,
            autoplayTimeout: 3500,
            controls: false,
            navPosition: 'bottom',
            autoplayButton: false
        });
    }

    // Animations
    lax.init();
    lax.addDriver('scrollY', function () {
        return window.scrollY
    });

    // As animações na seção Services são feitas apenas no desktop
    let servicesOffsetTop = document.getElementById('services').getBoundingClientRect().top;
    if (servicesOffsetTop > 450) {
        lax.addElements('#services svg', {
            scrollY: {
                scale: [
                    [0, 300],
                    [0.25, 1]
                ],
                opacity: [
                    [0, 300],
                    [0, 1]
                ]
            }
        });
        lax.addElements('#services .container .service:first-child h3', {
            scrollY: {
                translateX: [
                    [0, 300],
                    [-100, 0]
                ]
            }
        });
        lax.addElements('#services .container .service:last-child h3', {
            scrollY: {
                translateX: [
                    [0, 300],
                    [100, 0]
                ]
            }
        });
        lax.addElements('#services .container .service:first-child p', {
            scrollY: {
                translateX: [
                    [0, 350],
                    [-200, 0]
                ]
            }
        });
        lax.addElements('#services .container .service:last-child p', {
            scrollY: {
                translateX: [
                    [0, 350],
                    [200, 0]
                ]
            }
        });
    }
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