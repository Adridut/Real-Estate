let imageContainer = document.getElementById("imageContainer");
for (let i = 0; i < 25; i++) {
    imageContainer.innerHTML += ('<img src="../../Assets/Images/home.jpg" style="max-width: 25%; margin: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" alt="home"></img>')
}

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