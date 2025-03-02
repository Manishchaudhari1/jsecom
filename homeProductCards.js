import { addToCart } from "./addToCart";
import { homeQuantityToogle } from "./homeQuantityToogle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector('#productTemplate')

export const showProductContainer = (products) =>{
      if(!products){
       return 0;  //false
      } 

     products.forEach((curProd) => {

       const { brand,category,description,id,image,name,price,stock } = curProd ;

       const productClone = document.importNode(productTemplate.content,true)  //whole  Template is clone inside the ProductClone


       productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);


       productClone.querySelector(".category").textContent = category;
       productClone.querySelector(".productName").textContent = name;
       productClone.querySelector(".productImage").src = image;
       productClone.querySelector(".productImage").alt = name;
       productClone.querySelector(".productStock").innerText = stock;
       productClone.querySelector(".productDescription").textContent = description;
       productClone.querySelector(".productPrice").textContent = `₹${price}`;
       productClone.querySelector(".productActualPrice").textContent = `₹${price*4}`;
       

       productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
         homeQuantityToogle(event,id,stock)
        });
        

    productClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
      addToCart(event, id, stock);
    })


        productContainer.append(productClone)

     });

};