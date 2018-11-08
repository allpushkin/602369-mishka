
var header_no_js = document.querySelector(".header__no-js");
var header_button = document.querySelector(".header__button");
var header_menu = document.querySelector(".header__menu");
var weekly_button = document.querySelector(".weekly-item__button");
var modal = document.querySelector(".modal");
var modal_bg = document.querySelector(".modal__background");

header_no_js.classList.toggle("header__no-js");
header_button.classList.add("header__button--open");
header_menu.classList.add("header__menu--close");

header_button.addEventListener("click",function(evt){
  evt.preventDefault();
  header_button.classList.toggle("header__button--open");
  header_menu.classList.toggle("header__menu--close");
});

weekly_button.addEventListener("click",function (index_modal) {
  index_modal.preventDefault();
  modal.classList.remove("modal--close");
});

modal_bg.addEventListener("click",function (close_modal) {
  close_modal.preventDefault();
  modal.classList.add("modal--close");
});
