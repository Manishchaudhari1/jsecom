import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


 const removeProdFromCart = (id) =>{

    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));



    //  To remove the div onclick 
    let removeDiv = document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove();
    }

    updateCartValue(cartProducts);



  showToast("delete",id);
}

export default removeProdFromCart

