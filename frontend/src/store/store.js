import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";

const store=configureStore({
    reducer:{
        food:foodSlice
    }
})

export default store;