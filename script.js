let lastScrollTop = 0; // আগের স্ক্রল পজিশন সংরক্ষণ
let isButtonHidden = false;

$(window).on("scroll", function () {
    const currentScroll = $(this).scrollTop();

    if (currentScroll > 500) { 
        if (currentScroll > lastScrollTop && !isButtonHidden) {
            // নিচে স্ক্রল করলে বাটন হাইড হবে
            $("#sticky-btn-wrapper").removeClass("show").addClass("hide");
            isButtonHidden = true;
        } else if (currentScroll < lastScrollTop && isButtonHidden) {
            // উপরে স্ক্রল করলে বাটন শো হবে
            $("#sticky-btn-wrapper").removeClass("hide").addClass("show");
            isButtonHidden = false;
        }
    }
    lastScrollTop = currentScroll; // বর্তমান স্ক্রল পজিশন সংরক্ষণ
});
