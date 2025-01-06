
let prodHtml='';
const productGrid=  document.querySelector('.js-product-grid');
products.forEach((product)=>{
    prodHtml+=
    `<div class="product-container">
                <div class="product-img-container">
                    <img class="prod-img" src="${product.image}">
                </div>
                <div class="product-name">
                    ${product.name}
                </div>
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="images/ratings/rating-${(product.rating.stars)* 10}.png">
                    <div class="product-rating-count"> ${product.rating.count}</div>
                </div>
                <div class="product-price">
                    ${((product.priceCents)/10).toFixed(2)}
                </div>
                <div class="product-quantity-container">
                    <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>    
                </div>

                <div class="product-spacer"></div>
                <div class="added-to-cart">
                    <button class="add-to-cart-button button-primary js-add-to-cart"
                    data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div> 

    `;   
});
productGrid.innerHTML=prodHtml;
const addedToCart=document.querySelectorAll('.js-add-to-cart');


addedToCart.forEach((button)=>{
    button.addEventListener('click' ,()=>{
       const productId=button.dataset.productId;
       let matchingItem;
       cart.forEach((item)=>{
        if(productId===item.productId){
            matchingItem=item;
            
        }
       });
       if(matchingItem){
        matchingItem.quantity+=1;
        
       }       
       else{
        cart.push({
            productId:productId,
            quantity:1
        });        
       }
       console.log(cart);
   
       let totalQuantity=0;
       cart.forEach((item)=>{
        totalQuantity+=item.quantity;
       })
       console.log(totalQuantity);
       document.querySelector('.js-cart-quantity').innerHTML=`${totalQuantity}`;
    });
    
} )
