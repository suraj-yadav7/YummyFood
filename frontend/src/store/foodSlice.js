import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
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
            state.cartData = [...state.cartData, action.payload]
        },
        removeItem:(state, action)=>{
            if(action.payload.length ===0){
                state.cartData=[]
            }
            const filterItems=state.cartData.filter((items)=> items.id != action.payload.id)
            state.cartData = filterItems
        },
        updateItem:(state, action)=>{
           const update= state.cartData.map((item)=>{
                if(item.id === action.payload.id && item.portion == 'half'){
                    item.quant = parseInt(item.quant)+ parseInt(action.payload.quant)
                }
            })
        }

    }
})

export const {login,addItemCart,removeItem,updateItem} = foodSlice.actions
export  default foodSlice.reducer;