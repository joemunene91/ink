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

    var theC = document.getElementById('colors');
    var theLog = document.getElementById('cart-logo');


    var cxC = document.getElementById('than-verify');
    var cxEmail = document.getElementById('email-verify');
    var cxE = document.getElementById('code-email');
    var cxV = document.getElementById('code-verify');

    var csImg = document.getElementsByClassName('logo-img')[0];

    if (window.innerWidth > 768) {
        theC.setAttribute('href', 'css/styles-8.css');
        theLog.setAttribute('src', 'img/logos/logo8.png');


        document.getElementById('nav1').setAttribute('href', 'img/logos/logo8.png');
        document.getElementById('nav2').setAttribute('href', 'img/logos/logo8.png');
        document.getElementById('nav3').setAttribute('href', 'img/logos/logo8.png');
        document.getElementById('nav4').setAttribute('href', 'img/logos/logo8.png');

        cxC.classList.remove('ver-btn');
        cxC.classList.add('phone-btn');

        cxE.classList.remove('ver-btn');
        cxE.classList.add('phone-btn');

        cxEmail.classList.remove('ver-btn');
        cxEmail.classList.add('phone-btn');

        cxV.classList.remove('ver-btn');
        cxV.classList.add('phone-btn');

        csImg.setAttribute('src', 'img/logos/logo8.png');

    } 

}
)(jQuery);

