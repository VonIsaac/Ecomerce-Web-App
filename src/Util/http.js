import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();


export async function handleBuyingItem(buyItem){
    
   try{
    const response = await fetch('https://ecomerce-web-app-default-rtdb.firebaseio.com/buy.json', {
        method: 'POST',
        body: JSON.stringify({
            id: buyItem.id,
            name: buyItem.name,
            price: buyItem.price,
            description: buyItem.description,
            img: buyItem.img,
            quantity: buyItem.quantity + 1,
           
        }),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(!response.ok){
        throw new Error('An Eror Occured')
    }
    const resData = await response.json()

    return resData
   }catch(error){
        throw error
   }
    
};


export async function handleAddToCart(items){
    try{
        const response = await fetch('https://ecomerce-web-app-default-rtdb.firebaseio.com/cart.json', {
            method: 'POST',
            body: JSON.stringify(items),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('AN ADD TO CART EROR')
        }

        const resData = await response.json()

        return resData
    }
    catch(err){
        throw err
    }
}


export async function handleDeleteItem(){
    try{
        const response = await fetch('https://ecomerce-web-app-default-rtdb.firebaseio.com/cart.json', {
            method: 'DELETE',
          
        })

        if(!response.ok){
            throw new Error('Canot Delete Data')
        }

        return response.json()
    }
    catch(err){
        throw err
    }
}

