const buttonOpened = document.querySelector('.main-nav__burger');
const menu = document.querySelector('.main-nav__menu');
const buttonClosed = document.querySelector('.main-nav__close');

const closeMenu = () => {
    menu.classList.remove('main-nav__menu--showed');  
    buttonClosed.removeEventListener('click', closeMenu);
};

buttonOpened.addEventListener('click', function() {
    menu.classList.add('main-nav__menu--showed');
    buttonClosed.addEventListener('click', closeMenu);
});

const buttonClick = document.querySelectorAll('.product__click');

buttonClick.forEach(function(button) { 
    button.addEventListener('click', function() { 
        document.querySelector('.cart').classList.remove('cart__hidden'); 
    });
});

document.querySelector('.cart__close').addEventListener('click', function() {
    document.querySelector('.cart').classList.add('cart__hidden');
});
