// import { createLogger } from "vite";
import removeProdFromCart from "./removeProdFromCart"
import products from ".//api//products.json"

import {getCartProductFromLS} from ".//getCartProducts"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();  //3:08:12 local storage data is comming heer.

let filterProducts = products.filter((curProd)=>{
   return cartProducts.some((curElem) => curElem.id === curProd.id)
});


console.log(filterProducts);


const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector('#productCartTemplate');


const showCartProduct = ()=>{

 filterProducts.forEach((curProd) =>{
    const {category, id, image, name, stock, price} = curProd;
    let productClone = document.importNode(templateContainer.content,true)
    

    const lSActualData = fetchQuantityFromCartLS(id,price)

    productClone.querySelector('#cardValue').setAttribute("id", `card${id}`)
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector(".productPrice").textContent = price;

    productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =  lSActualData.price


    productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
      incrementDecrement(event, id, stock, price)
    })


    productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=> removeProdFromCart(id))

    cartElement.appendChild(productClone)
 })

}

 

showCartProduct();

updateCartProductTotal();
