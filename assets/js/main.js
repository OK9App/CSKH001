var menuControl = $(".menu-sm");
var closeMenu = $(".close-icon");
closeMenu.hide();
menuControl.css({ left: "-100%" });
$(".menu-mobile").on("click", function () {
    $(".header-bottom").show("fast");
    $(".header-bottom").animate({
        left: "0px",
        display: "block",
    });

    $(".sidemenu-overlay").addClass("active");
    closeMenu.show();
});

$(".close-icon, .sidemenu-overlay").on("click", function () {
    $(".header-bottom").animate({ left: "-100%" });
    $(".sidemenu-overlay").removeClass("active");
});

$(".banner_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    dots: false,
    arrows: false,
    focusOnSelect: true,
});

$("#btn-tawk-small").hide();

$("#btn-tawk-small").on("click", function () {
    $(this).hide();
    $(".chat-dialog").hide();
});
