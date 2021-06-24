
let swiperContainer = document.getElementById("swiperContainer");
for (let i = 0; i < 10; i++) {
    swiperContainer.innerHTML += ('<img class="swiper-slide" src="../../Assets/Images/home.jpg" alt="home"></img>')
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});