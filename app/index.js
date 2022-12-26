// Menu Bar
function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[68px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[68px]'),list.classList.remove('opacity-100'))
}

// Our Team Member
let swiper = new Swiper(".mySwiper", {

    // pagination: '.pagination',
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000, // 2000ms = 2s;
    autoplayHoverPause: true,
    // paginationClickable: true,

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
    }
});

// (".mySwiper").mouseenter(function(){
//     swiper.autoplay.stop();
// });
// (".mySwiper").mouseleave(function(){
//     swiper.autoplay.start();
// });

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
    autoplay: true,
    autoplayTimeout: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});