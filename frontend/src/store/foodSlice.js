import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    foodData:[],
    userData:[],
    cartData:[],
}

const foodSlice = createSlice({
    name:"foodslice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            
        },
        addItemCart:(state,action)=>{
            state.cartData.push(action.payload)
        }

    }
})

export const {login,addItemCart} = foodSlice.actions
export  default foodSlice.reducer;