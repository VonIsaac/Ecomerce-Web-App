import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();


export async function handleBuyingItem(buyItem){
    const response = await fetch('https://ecomerce-web-app-default-rtdb.firebaseio.com/buy.json', {
        method: 'POST',
        body: JSON.stringify(buyItem),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(!response.ok){
        throw new Error('An Eror Occured')
    }

    const resData = await response.json()

    return resData
};