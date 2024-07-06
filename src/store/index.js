import { configureStore } from "@reduxjs/toolkit";

import ItemData from "./item-slice";

const store = configureStore({
    reducer:{
        item: ItemData.reducer
    }
})

export default store