import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();


export async function handleBuyingItem(item){
    
   try{
    const response = await fetch('https://ecomerce-web-app-default-rtdb.firebaseio.com/buy.json', {
        method: 'POST',
        body: JSON.stringify({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
            img: item.img,
            totalQuantity: 1
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

