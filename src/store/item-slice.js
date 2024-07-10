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

        addToCartItem(state, action){
            const itemsId = action.payload
            const existingItems = state.items.find((items) => items.id === itemsId.id)
            state.change = true
            state.totalAddToCartQuantity++ 
            if(!existingItems){
                state.items.push({
                    id:itemsId.id,
                    name:itemsId.name,
                    price:itemsId.price,
                    quantity: 1,
                    description: itemsId.description,
                    img: itemsId.img
                })
            }else{
                existingItems.quantity = existingItems.quantity + 1
                existingItems.price = existingItems.price + itemsId.price
            }

        }

        
    }
})


export const ItemDataAction = ItemData.actions
export default ItemData   