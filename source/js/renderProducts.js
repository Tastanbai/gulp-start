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
        const priceEl = itemEl.querySelector('.product__price');
        const newPriceEl = priceEl.querySelector('.product__new-price');
        const oldPriceEl = priceEl.querySelector('.product__old-price');
        const clickEl = itemEl.querySelector('.product__click');
        const { id, status, image, description, price, isBig} = product;
    
        itemEl.dataset.productEl = id;
        imageEl.src = image;
        descriptionEl.textContent = description;

        newPriceEl.textContent = `${price[0]} ₽`;
        oldPriceEl.textContent = `${price[1]} ₽`;

        if (status.length) {
            itemEl.classList.add(`product--${status}`);
        }

        if (isBig) {
            itemEl.classList.add('product--big');
        }

        fragment.appendChild(itemEl);
    });

    target.innerHTML = '';
    target.append(fragment);
}