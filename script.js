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

// Selected item Toggle class
const selectItem = document.querySelector('#listSelected_item').children;
const getValue = document.querySelector('#getValue');

for (let item of selectItem) {
    item.addEventListener('click', function () {
        // Remove 'active' class from all items first
        for (let sibling of selectItem) {
            sibling.classList.remove('active');
        }

        // Add 'active' class to the clicked item
        item.classList.add('active');
        
        // Find the element with the class 'prize-1'
        let priceElement = item.querySelector('.prize-1');
        
        let priceValue;
        priceValue = priceElement.textContent;
        
        // Display the value in the #getValue element
        getValue.innerHTML = priceValue;
      
    });
}
