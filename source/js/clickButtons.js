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
    const cart = document.querySelector('.cart');

    if (cartCloseButton && cart) {
        cartCloseButton.addEventListener('click', () => {
            cart.classList.add('hidden');
        });
    }
};

export const AllButtons = () => {
    CartAddButtons();
    CartCloseButtons();
};
