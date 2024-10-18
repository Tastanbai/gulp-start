import formatPrice from "./formatPrice.js";
import {addToStorage} from "./localstorage.js";
import { addToCard } from "./cart.js";
import { CartAddButtons, CartCloseButtons } from "./clickButtons.js";

export default (products, template, target, isTargetList = false,) => {
    const fragment =document.createDocumentFragment();

    let productEl=template.querySelector('.product');

    if (isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, function( attr ) {
            node.setAttribute( attr.name, attr.value );
        });

        productEl=node;
    }

    products.forEach(product => {
        const itemEl = productEl.cloneNode(true);
        const imageEl = itemEl.querySelector('.product__image');
        const descriptionEl = itemEl.querySelector('.product__description');
        const newPriceEl = itemEl.querySelector('.product__new-price');
        const oldPriceEl = itemEl.querySelector('.product__old-price');
        const clickEl = itemEl.querySelector('.product__click');
        const { id, status, image, name, price, oldPrice, isBig } = product;
    
        itemEl.dataset.productEl = id;
        imageEl.src = image;
        descriptionEl.textContent = name;
        newPriceEl.textContent = formatPrice(price);
        oldPriceEl.textContent = formatPrice(price);
        

        clickEl.addEventListener('click',  () => {
            addToStorage('cart', product);
            addToCard(product);
        });
        
        
        if (status?.length) {
            itemEl.classList.add(`product--${status}`);
        }

        if (isBig) {
            itemEl.classList.add('product--big');
        }

        if (clickEl) {  
            clickEl.classList.add('product__click');
        }

        fragment.appendChild(itemEl);
    });

    target.innerHTML = '';
    target.append(fragment);
}