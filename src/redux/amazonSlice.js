import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    userinfo:[],
}

export const amazonSlice = createSlice({
    name: "amazon",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.products.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.products.push(action.payload)
            }
            
        },
        decrementQuantity:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload);
            if(item && item.quantity > 1){ // Check if item exists and quantity is greater than 1
                item.quantity--;
            }
        },
        incrementQuantity:(state,action)=>{
            const item = state.products.find((item) => item.id === action.payload);
            if(item){ // Check if item exists
                item.quantity++;
            }
        },
        deleteItem: (state,action)=> {
            state.products = state.products.filter((item)=>item.id!==action.payload)
        },
            resetCart: (state)=>{
                state.products=[]
            }
        }

    
})

export const{addToCart,deleteItem,resetCart, decrementQuantity, incrementQuantity}= amazonSlice.actions;
export default amazonSlice.reducer;