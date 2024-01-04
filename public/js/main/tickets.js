(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
        }
    });


    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(document).ready(function() {

        $('#services-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: true,
            nav: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 300,
            autoplayHoverPause: false,
            stagePadding: 0,
            slideTransition: 'linear',
            autoplayTimeout: 5000,
            autoplaySpeed: 5000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 3,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 30
                },
                992: {
                    items: 4,
                    margin: 30
                },
                1200: {
                    items: 8,
                    margin: 20
                }
            }
        });

    });
    function toggleFullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    ;var navbar_init = function() {
        $('.switcher-setting').on('click', function() {
            toggleFullScreen();
            return false;
        });
    };
    navbar_init();
}
)(jQuery);




! function(g) {
    "use strict";
    var c = g(window);
    c.on("load", function() {
        g(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), g(".portfolio-link").on("click", e => {
            e.stopPropagation()
        })
    })
}(jQuery);
