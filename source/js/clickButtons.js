// export const CartAddButtons = () => {
//     const productButtons = document.querySelectorAll('.product__click');
//     const cart = document.querySelector('.cart');

//     productButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             if (cart) {
//                 cart.classList.remove('hidden');
//             }
//         });
//     });
// };

// export const CartCloseButtons = () => {
//     const cartCloseButton = document.querySelector('.cart__close');
//     const cart = document.querySelector('.cart');

//     if (cartCloseButton && cart) {
//         cartCloseButton.addEventListener('click', () => {
//             cart.classList.add('hidden');
//         });
//     }
// };

// export const AllButtons = () => {
//     CartAddButtons();
//     CartCloseButtons();
// };
export const CartAddButtons = () => {
    const productButtons = document.querySelectorAll('.product__click');
    const cart = document.querySelector('.cart');

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (cart) {
                cart.classList.remove('hidden');
            }
        });
    });
};

export const CartCloseButtons = () => {
    const cartCloseButton = document.querySelector('.cart__close');
    const continueButton = document.querySelector('.cart__button'); // кнопка "Продолжить покупки"
    const cart = document.querySelector('.cart');

    // Закрытие корзины по кнопке "X"
    if (cartCloseButton && cart) {
        cartCloseButton.addEventListener('click', () => {
            cart.classList.add('hidden');
        });
    }

    // Закрытие корзины по кнопке "Продолжить покупки"
    if (continueButton && cart) {
        continueButton.addEventListener('click', () => {
            cart.classList.add('hidden');
        });
    }
};

export const AllButtons = () => {
    CartAddButtons();
    CartCloseButtons();
};
