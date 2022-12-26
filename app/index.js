// Menu Bar
function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[68px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[68px]'),list.classList.remove('opacity-100'));
}

// Our Team Member
let swiper = new Swiper(".mySwiper", {

    // pagination: '.pagination',
    loop: true, 
    autoplay: {
        delay: 2500, // 2000ms = 2s;
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
});



// Our Services
let swiper1 = new Swiper(".serviceSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
        },
        // when window width is >= 1024px
        1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3
        }
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});