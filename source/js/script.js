import products from "./products.js";
import renderProducts from "./renderProducts.js";

const bestsellingList=document.querySelector('.best-selling__list');
const bestsellingItemTemplate=document.querySelector('#product').content;

renderProducts(products,bestsellingItemTemplate, bestsellingList, true);

const buttonOpened = document.querySelector('.main-nav__burger');
const menu = document.querySelector('.main-nav__menu');
const buttonClosed = document.querySelector('.main-nav__close');

const closeMenu = () => {
    if (menu) {
        menu.classList.remove('main-nav__menu--showed');  
    }
    if (buttonClosed) {
        buttonClosed.removeEventListener('click', closeMenu);
    }
};

if (buttonOpened && menu && buttonClosed) {
    buttonOpened.addEventListener('click', function() {
        menu.classList.add('main-nav__menu--showed');
        buttonClosed.addEventListener('click', closeMenu);
    });
}

const productButtons = document.querySelectorAll('.product__click');

if (productButtons.length > 0) {
    productButtons.forEach(function(button) { 
        button.addEventListener('click', function() { 
            const cart = document.querySelector('.cart');
            if (cart) {
                cart.classList.remove('hidden'); 
            }
        });
    });
}

const cartCloseButton = document.querySelector('.cart__close');
const cart = document.querySelector('.cart');

if (cartCloseButton && cart) {
    cartCloseButton.addEventListener('click', function() {
        cart.classList.add('hidden');
    });
}
