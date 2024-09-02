const buttonOpened = document.querySelector('.main-nav__burger');
const menu = document.querySelector('.main-nav__menu');
const buttonClosed = document.querySelector('.main-nav__close');

export const closeMenu = () => {
    if (menu) {
        menu.classList.remove('main-nav__menu--showed');  
    }
    if (buttonClosed) {
        buttonClosed.removeEventListener('click', closeMenu);
    }
};

export const OpenMenu = () => {
    if (buttonOpened && menu && buttonClosed) {
        buttonOpened.addEventListener('click', function() {
            menu.classList.add('main-nav__menu--showed');
            buttonClosed.addEventListener('click', closeMenu);
        });
    }
};
