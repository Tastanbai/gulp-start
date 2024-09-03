import { OpenMenu } from "./menu.js";
import products from "./products.js";
import renderProducts from "./renderProducts.js";
import { fetchData } from "./api.js";
import { AllButtons } from "./clickButtons.js";

OpenMenu();

const bestsellingList=document.querySelector('.best-selling__list');
const bestsellingItemTemplate=document.querySelector('#product').content;
const fetchedProducts = fetchData('https://zsa-studio.ru/catalog.php');


fetchedProducts.then((products) => {
    renderProducts(products, bestsellingItemTemplate, bestsellingList, true);
    AllButtons(); // Call AllButtons() after rendering products
});
