import { createSlice } from "@reduxjs/toolkit";

const ItemData = createSlice({
    name: 'dataItme',
    initialState: {
        items: [],
        totalQuantity: 0,
        change: false
    },

    reducers: {
        buyItems(state, action){
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.change = true
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    description:newItem.description,
                    img: newItem.img
                })
            }
        }
    }
})


export const ItemDataAction = ItemData.actions
export default ItemData   