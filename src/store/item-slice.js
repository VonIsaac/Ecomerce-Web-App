import { createSlice } from "@reduxjs/toolkit";

const ItemData = createSlice({
    name: 'dataItme',
    initialState: {
        items: [],
        totalQuantity: 0,
        change: false,
        totalAddToCartQuantity: 0
    },

    reducers: {
        buyItems(state, action){
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++
            state.change = true
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    quantity: 1,
                    description:newItem.description,
                    img: newItem.img
                })
            }else{
                existingItem.quantity = existingItem.quantity + 1
            }
        },

       

        
    }
})


export const ItemDataAction = ItemData.actions
export default ItemData   