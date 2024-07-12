(function($) {

    //手機觸控事件
    var touchevent = function() { $(this).addClass('on-touch'); }
    var touchevent2 = function() { $(this).removeClass('on-touch'); }
    $('a')
        .on('touchstart mouseenter click', touchevent)
        .on('touchend mouseleave click', touchevent2);

    //點擊滑動
    $(".main-nav li a").click(function() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        var attrTop = $($(this).attr("href")).offset().top;
        var MainNavHeight = $('.main-nav').height();

        $body.animate({
            scrollTop: attrTop - MainNavHeight + "px"
        }, {
            duration: 500,
            easing: "swing"
        });

        $(".main-nav li a").removeClass('active');
        $(this).addClass('active')

        return false;
    });

    //往上的按鈕
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.scrollToTop').addClass('visible');
        } else {
            $('.scrollToTop').removeClass('visible');
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });


    //解決inline-box間距
    $('.main-nav-pc').contents().filter(function() {
        return this.nodeType === 3;
    }).remove();


})(jQuery);

$(document).on('ready', function() {
    $('.bn_box').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(function() {
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        mainClass: 'mfp-with-anim',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
    $('.popup-close').click(function() {
        $.magnificPopup.close();
    });
});

$(document).ready(function() {

    if (location.href.indexOf("#reloaded") == -1) {
        location.href = location.href + "#reloaded";
        location.reload();
    }
});

$(function() {
    $(".game_box").click(function() {
        $(this).toggleClass('br_g');
        $(this).find(".game_con,.game_bg").css({
            'display': 'block',
            'transition': '.4s'
        });
        $(this).find(".game_img").css({
            'transform': 'scale(1.2)',
            'transition': '.4s',
            'webkit-filter': 'sepia(80%)',
            'filter': 'sepia(80%)'
        });
        var se = $(this).parents(".game_body").siblings(".game_body");
        se.find(".game_box").removeClass('br_g');
        se.find(".game_con,.game_bg").css({
            'display': 'none',
            'transition': '.4s'
        });
        se.find(".game_img").css({
            'transform': 'scale(1)',
            'transition': '.4s',
            'webkit-filter': 'sepia(0%)',
            'filter': 'sepia(0%)'
        });
    });
});