import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    foodData:[],
    userData:[],
}

const foodSlice = createSlice({
    name:"foodslice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            
        },

    }
})

export const {login} = foodSlice.actions
export  default foodSlice.reducer;