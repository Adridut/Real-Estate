
// let swiperContainer = document.getElementById("swiperContainer");
// for (let i = 0; i < 9; i++) {
//     swiperContainer.innerHTML += ('<img class="swiper-slide" src="../../Assets/Images/home.jpg" alt="home"></img>')
// }

const swiper = new Swiper('.swiper-container', {

    // Navigation arrows
    loop: true,
    slidesPerView: 2,
    spaceBetween: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});