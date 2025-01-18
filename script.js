$(window).on("scroll", function () {
    var scrollBarPosition = $(this).scrollTop();

    if (scrollBarPosition > 150) {
        $(".sticky-btn-wrapper").addClass("sticky");
    } else {
        $(".sticky-btn-wrapper").removeClass("sticky");
    }
});
