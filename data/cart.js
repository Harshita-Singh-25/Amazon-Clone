export let cart=[

];

export function AddToCart(productId){
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
}