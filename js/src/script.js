$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass("loaded");
        $('body').removeClass('fade-out');
        var elements = document.querySelectorAll('.scrollwatch');
        var config = {
            threshold: 0
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
        $('.header__nav-wrapper').toggleClass('active');
        $('body').toggleClass('menu-active');
    });
});
let links = $('body').find('a');
if (links) {
    links.on("click", function (e) {
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
                    window.location = href;
                } else {
                }
            }, 200);
            body.classList.add('fade-out');
        }
    })
}

