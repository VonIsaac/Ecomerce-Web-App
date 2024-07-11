import { createSlice } from "@reduxjs/toolkit";

const itemAddtoCart = createSlice({
    name: 'addTocartItem',
    initialState: {
        cartItem: [],
        change: false,
        totalCartQuantity: 0
    },


    reducers:{
        addToCartItem(state, action){
            const itemsId = action.payload
            const existingItems = state.cartItem.find((items) => items.id === itemsId.id)
            state.change = true
            state.totalCartQuantity++ 
            if(!existingItems){
                state.cartItem.push({
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

export const ItemAddtoCartAction = itemAddtoCart.actions
export default itemAddtoCart