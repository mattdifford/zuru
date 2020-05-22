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
    $('.case-studies__nav-item').on("click", function () {
        if (!$(this).hasClass('active') && !$('.case-studies__nav').hasClass('block')) {
            $('.case-studies__nav').addClass('block');
            $('.case-studies__nav-item').removeClass('active');
            var index = $(this).attr("data-index");
            var $case_studies = $('.case-studies__list-item');
            var $new = $case_studies.eq(index);
            var $current = $('.case-studies__list-item.active');
            $current.fadeOut();
            $current.removeClass('active');
            var $this = $(this);
            setTimeout(() => {
                $new.fadeIn().addClass('active');
                $this.addClass('active');
                $('.case-studies__nav').removeClass('block');
                $('.case-studies__buttons').removeClass('block');
            }, 400);
        }
    });
    $('.case-studies__prev').on("click", function () {
        if (!$('.case-studies__buttons').hasClass('block')) {
            $('.case-studies__buttons').addClass('block');
            var $active = $('.case-studies__nav-item.active');
            var $new;
            if ($active.prev().length == 1) {
                $new = $active.prev();
            } else {
                $new = $('.case-studies__nav-item').last();
            }
            $new.trigger("click");
        }
    });
    $('.case-studies__next').on("click", function () {
        if (!$('.case-studies__buttons').hasClass('block')) {
            $('.case-studies__buttons').addClass('block');
            var $active = $('.case-studies__nav-item.active');
            var $new;
            if ($active.next().length == 1) {
                $new = $active.next();
            } else {
                $new = $('.case-studies__nav-item').first();
            }
            $new.trigger("click");
        }
    });
    $('a').on("click", function () {
        if ($(this).attr("href").charAt(0) === '#') {
            $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top - 100 }, 750);
        }
    });
});

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

let links = document.querySelectorAll('a');
if (links) {
    links.forEach((link) => {
        link.onclick = (e) => {
            let body = document.querySelector('body');
            if (!e.srcElement.parentElement.href) {
                var href = e.srcElement.href;
            } else {
                var href = e.srcElement.parentElement.href;
            }
            if (href.charAt(0) != '#') {
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
        }
    })
}

