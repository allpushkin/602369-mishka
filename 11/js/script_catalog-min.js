var header_no_js=document.querySelector(".header__no-js"),header_button=document.querySelector(".header__button"),header_menu=document.querySelector(".header__menu"),modal=document.querySelector(".modal"),modal_bg=document.querySelector(".modal__background"),rabbit_basket=document.querySelector(".product-item__button-basket--rabbit-jumper"),clothes_basket=document.querySelector(".product-item__button-basket--bedclothes-basket"),toy_basket=document.querySelector(".product-item__button-basket--toy-basket");header_no_js.classList.toggle("header__no-js"),header_button.classList.add("header__button--open"),header_menu.classList.add("header__menu--close"),header_button.addEventListener("click",function(e){e.preventDefault(),header_button.classList.toggle("header__button--open"),header_menu.classList.toggle("header__menu--close")}),modal_bg.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal--close")}),rabbit_basket.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal--close")}),clothes_basket.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal--close")}),toy_basket.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal--close")});