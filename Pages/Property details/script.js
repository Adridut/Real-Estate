

const swiper = new Swiper('.swiper-container', {

  loop: true,
  slidesPerView: 2,
  spaceBetween: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function zoom(img) {
  let modal = document.getElementById("popup");
  modal.innerHTML = '<img class="cardImage" src="'+img+'" alt="home"></img>'

}