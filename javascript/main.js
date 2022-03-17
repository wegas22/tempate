jQuery(document).ready(function($) {

    // УВЕЛИЧЕНИЕ КАРТИНКИ 	.zoom-img
    // ГАЛЕРЕЯ              .gallery
    // ОТПРАВКА ФОРМЫ       .form-submit-toggle
    // ОБРАТНЫЙ ЗВОНОК      .callback-toggle
    // КАРТИНКУ ФОНОМ       .img-cover
    // input c капчей       .reCaptcha

    // МАСКИ ДЛЯ ПОЛЯ ВВОДА НОМЕРА ТЕЛЕФОНА
    // РОССИЯ               .mask-tel-rus

    $('.mask-tel-rus').inputmask('+7 (999) 999-99-99');

    // УВЕЛИЧЕНИЕ КАРТИНКИ
    $('.zoom-img').magnificPopup({
        type: 'image',
        removalDelay: 500,
        mainClass: 'mfp-fade'
    });

    // ГАЛЕРЕЯ
    $('.gallery').each(function() {
        var test = $(this).find('a');
        $(test).magnificPopup({
            type: 'image',
            removalDelay: 500,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                tCounter: ''
            }
        });
    });


    $('.sliderNews').slick({
        autoplay: false,
        autoplaySpeed: 3500,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        easing: 'easeInOutQuart',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 371,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });


});