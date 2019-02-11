$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 100,
        // autoWidth: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false
    });

    $('.item').each(function(){
        $(this).css('animation-delay', Math.random() * (2) + 1 + 's')
    });
});