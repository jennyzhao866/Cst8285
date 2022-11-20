let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');


// alert("Hello");

menu.onclick =  () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}

var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6400,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    },
  });