import formatPrice from "./formatPrice.js"; // Функция для форматирования цены
import { addToStorage } from "./localstorage.js"; // Для работы с localStorage

// Получаем элементы
const cartButton = document.querySelector('.main-nav__shop'); // Кнопка корзины
const cartModal = document.querySelector('.basket'); // Модальное окно корзины
const closeButton = document.querySelector('.basket__close'); // Кнопка закрытия корзины
const cartList = document.querySelector('.basket-cart__list'); // Список товаров в корзине
const cartCount = document.querySelector('.main-nav__pin'); // Счётчик товаров в корзине


// Функция добавления товара в корзину
export const addToCard = (product) => {
    const cartProductTemplate = document.querySelector('#basket-list__template').content.querySelector('.basket__item'); // Шаблон товара
    const clone = cartProductTemplate.cloneNode(true); // Клонируем шаблон товара
    
    // Заполняем информацию о товаре
    clone.querySelector('.basket__image').src = product.image;
    clone.querySelector('.basket__tag').textContent = product.name;
    clone.querySelector('.basket__price').textContent = formatPrice(product.price);
    
    // Добавляем товар в корзину (в DOM)
    cartList.append(clone);

    // Обновляем количество товаров в корзине
    const totalItems = cartList.childElementCount;
    cartCount.textContent = totalItems;

    // Сохраняем товар в localStorage
    addToStorage('cart', product);
};

// Открытие корзины при клике на кнопку
cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.remove('hidden'); // Убираем класс 'hidden', показывая корзину
});

// Закрытие корзины при клике на кнопку закрытия
closeButton.addEventListener('click', () => {
    cartModal.classList.add('hidden'); // Добавляем класс 'hidden', скрывая корзину
});
