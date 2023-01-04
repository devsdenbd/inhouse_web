// Menu Bar
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[69px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[69px]'), list.classList.remove('opacity-100'));
}


// Our Services
let swiper_service = new Swiper(".serviceSwiper", {
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

// Our Projects

let swiper_project = new Swiper(".projectSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            // slidesPerGroup: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            // slidesPerGroup: 2
        }
    },
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// Our Team Member
let team_swiper = new Swiper(".teamSwiper", {

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
        depth: 190,
        modifier: 1,
        slideShadows: false,
    },
});