$(document).ready(function () {
    $('body').addClass("loaded");
    setTimeout(function () {
        $('body').removeClass('fade-out');
        var elements = document.querySelectorAll('.scrollwatch');
        var config = {
            threshold: 0.01
        };
        var observer;
        function onIntersection(entries) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    handleScrolledIntoView(entry.target);
                }
            });
        }

        if (!('IntersectionObserver' in window)) {
            Array.from(elements).forEach(el => handleScrolledIntoView(el));
        } else {
            observer = new IntersectionObserver(onIntersection, config);
            elements.forEach(el => {
                observer.observe(el);
            });
        }
        function handleScrolledIntoView(target) {
            target.classList.add('scrolled');

        }
    }, 200)
    $('a').on("click", function () {
        if ($(this).attr("href").charAt(0) === '#') {
            $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 750);
        }
    });
    $('.header__menu-icon').on("click", function (e) {
        e.preventDefault();
        $('.menu').addClass('active');
        $('body').addClass('menu-active');
    });
    $('.menu__close').on("click", function (e) {
        e.preventDefault();
        $('.menu').removeClass('active');
        $('body').removeClass('menu-active');
    });
    $('.features-list__list').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.journal__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header_bar").style.transform = "translateY(0)";
    } else {
        document.getElementById("header_bar").style.transform = "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
}
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

let links = $('body').find('a');
if (links) {
    links.on("click", function () {
        let body = document.querySelector('body');
        if (!($(this).parent().attr("href"))) {
            var href = $(this).attr("href");
        } else {
            var href = $(this).parent().attr("href");
        }
        var path = href.replace(window.location.origin + window.location.pathname, '');
        if (path.charAt(0) == '/') {
            e.preventDefault();
            setTimeout(function () {
                if (body.classList.contains('fade-out')) {
                    console.log('navigating');
                    window.location = href;
                } else {
                    console.log('whoops', e.srcElement.parentElement.href);
                }
            }, 200);
            body.classList.add('fade-out');
        }
    })
}

