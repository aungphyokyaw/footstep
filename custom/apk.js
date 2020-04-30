
$(window).scroll(function() {
    var top = $(this).scrollTop();
    // console.log(top)
    if(top >= 79) {
        $('.sticky-nav').addClass('sticky');
    } else {
        $('.sticky-nav').removeClass('sticky');
    }
});

$(document).ready(function() {
    let cardHeight = $('.show-img').innerHeight();
    $('.show-img').hide();
    $('.show-img').slice(0, 2).show();
    $('.loadmore').on('click', function() {
        $('.show-img:hidden').slice(0, 4).show();
        $('html, body').animate({
            scrollTop: ($('.loadmore').offset().top - cardHeight) - 100
        }, 1000, 'swing');
        if($('.show-img:hidden').length == 0) {
            $('.loadmore').fadeOut('slow');
        }
    });
    if($('.show-img:hidden').length < 2) {
        $('.loadmore').fadeOut('slow');
    }
});



