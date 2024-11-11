function redirectMobileHandler() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    if (width <= 768) {
        $('.list-button').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            speed: 300,
            dots: false,
            focusOnSelect: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
        });
    }
}

window.onload = redirectMobileHandler();
window.onresize = () => redirectMobileHandler();


$(".close-icon, .sidemenu-overlay").on("click", function () {
    $(".header-bottom").animate({ left: "-100%" });
    $(".sidemenu-overlay").removeClass("active");
});

$("#btn-tawk-small").hide();

$("#btn-tawk-small").on("click", function () {
    $(this).hide();
    $(".chat-dialog").hide();
});
