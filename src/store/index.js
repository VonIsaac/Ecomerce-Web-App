import { configureStore } from "@reduxjs/toolkit";

import ItemData from "./item-slice";
import itemAddtoCart from "./item-addToCart-slice";
const store = configureStore({
    reducer:{
        item: ItemData.reducer,
        cartItems: itemAddtoCart.reducer
    }
})

export default store