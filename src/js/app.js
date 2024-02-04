import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";
 

document.addEventListener ("DOMContentLoaded", () => {
    //setApp => categories : ok
    CategoryView.setApp(); 
    ProductView.setApp(); 
    console.log(ProductView); 
    // create categories oprions
    CategoryView.createCategoriesList(); 
    //
    ProductView.createProductsList(ProductView.products); 

}); 