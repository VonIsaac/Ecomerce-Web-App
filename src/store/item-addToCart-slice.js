import { createSlice } from "@reduxjs/toolkit";

const itemAddtoCart = createSlice({
    name: 'addTocartItem',
    initialState: {
        cartItem: [],
        change: false,
        totalCartQuantity: 0,
        totalIncrementQuantity: 1
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
                existingItems.price *= 2
            }

        },

        incrementPrice(state, action){
            const incrementId = action.payload
            const incrementState = state.cartItem.find((incrementItme) => incrementItme.id === incrementId.id)
           if(incrementState){
                state.change = true
                incrementState.price *=2
                incrementState.quantity++ 
           }
        },

        decrementPrice(state, action){
            const decrementID = action.payload
            const decrementState = state.cartItem.find((decrementItem) => decrementItem.id === decrementID.id)

            if(decrementState){
                state.change = true
                decrementState.price -= 2
                decrementState.quantity --
            }
        }
    }
})
 
export const ItemAddtoCartAction = itemAddtoCart.actions
export default itemAddtoCart