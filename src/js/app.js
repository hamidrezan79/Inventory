import CategoryView from "./CategoryView.js";
import productView from "./ProductView.js"
document.addEventListener("DOMContentLoaded", () => {
    CategoryView.setApp();
    CategoryView.creatCategoriesList();
    productView.setApp();
    productView.createProductsList(productView.products);
});







// target:
//1. creat category
//2. creat product based on selected category
//3. edit product
//4. remove product
//5. save product on local storage
//  =>storage class for handle application metoods
//  =>productView class
//  =>categoryView class
//  =>main and App class