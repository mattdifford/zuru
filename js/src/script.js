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
        if ($(this).attr("href").charAt(0) === '#' && $(this).attr("href").length > 1) {
            $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 750);
        }
    });
    $('.header__menu-icon').on("click", function (e) {
        e.preventDefault();
        $('.header__nav-wrapper').toggleClass('active');
        $('body').toggleClass('menu-active');
    });

    $('.team-strip__list-item').on("click", function (e) {
        e.preventDefault();
        $('.team-strip__wrapper').addClass('animating');
        var $this = $(this);
        setTimeout(function () {
            $('.team-strip__list-item').removeClass('active');
            $this.addClass('active');
            $('.team-strip__list').addClass('active');
            $('.team-strip__person').removeClass('active');
            $('.team-strip__person[data-index="' + $this.attr("data-index") + '"]').addClass('active');
        }, 420);
        setTimeout(function () {
            $('.team-strip__wrapper').removeClass('animating');
        }, 750)
    });
});
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
                    window.location = href;
                } else {
                }
            }, 200);
            body.classList.add('fade-out');
        }
    })
}

