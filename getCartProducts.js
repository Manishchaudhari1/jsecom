import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () =>{
       // local storage has no item at this moment so that we give the name ot the localstorage  that is "cartProductLS" this is a actual key inwhich the data will to stored
    let cartProducts = localStorage.getItem("cartProductLS"); //2:18:15 to 2:19:34
    if(!cartProducts){
        return [];
    }
     cartProducts = JSON.parse(cartProducts);
   
     updateCartValue(cartProducts);

     return cartProducts; 
  
}