
var header_no_js = document.querySelector(".header__no-js");
var header_button = document.querySelector(".header__button");
var header_menu = document.querySelector(".header__menu");
var modal = document.querySelector(".modal");
var modal_bg = document.querySelector(".modal__background");
var rabbit_basket = document.querySelector(".product-item__button-basket--rabbit-jumper");
var clothes_basket = document.querySelector(".product-item__button-basket--bedclothes-basket");
var toy_basket = document.querySelector(".product-item__button-basket--toy-basket");

header_no_js.classList.toggle("header__no-js");
header_button.classList.add("header__button--open");
header_menu.classList.add("header__menu--close");

header_button.addEventListener("click",function(evt){
  evt.preventDefault();
  header_button.classList.toggle("header__button--open");
  header_menu.classList.toggle("header__menu--close");
});

modal_bg.addEventListener("click",function (close_modal) {
  close_modal.preventDefault();
  modal.classList.add("modal--close");
});

rabbit_basket.addEventListener("click",function (rabbit_modal) {
  rabbit_modal.preventDefault();
  modal.classList.remove("modal--close");
});

clothes_basket.addEventListener("click",function (clothes_modal) {
  clothes_modal.preventDefault();
  modal.classList.remove("modal--close");
});

toy_basket.addEventListener("click",function (toy_modal) {
  toy_modal.preventDefault();
  modal.classList.remove("modal--close");
});
