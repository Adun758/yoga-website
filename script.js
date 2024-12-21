// const menutoggle =document.querySelector("menutoggle");
// const nav = document.querySelector("nav")
// menutoggle.addEventListener("click",()=>{
//     nav.navlists.menutoggle("nav-lists")
// })

const menuBtn = document.querySelector("#menuIcon");
const navBar = document.querySelector("#navBar");
const closeBtn = document.querySelector("#closeIcon")

menuBtn.addEventListener("click", menuBtnFunc);
closeBtn.addEventListener("click", closeIconFunc)

function menuBtnFunc() {
  navBar.style.transition = " all .8s ease-in-out";
  navBar.style.top = 0;
}

function closeIconFunc() {
    navBar.style.top = "-500px";
}

// swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
