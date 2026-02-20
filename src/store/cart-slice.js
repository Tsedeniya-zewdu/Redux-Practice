import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemList:[],
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        addToCart(state, action){

            const newItem = action.payload;
            const exsistingItem = state.itemList.find((item) => item.id === newItem.id);

            if(exsistingItem){
                exsistingItem.quantity++;
                exsistingItem.totalPrice += newItem.price;
            } else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state,action){
            const id = action.payload;
            const exsistingItem = state.itemList.find((item) => item.id === id);
            if (exsistingItem.quantity === 1){
                state.itemList = state.itemList.filter((item) => item.id !== id)
                state.totalQuantity--;
            } else{
                exsistingItem.quantity--;
                exsistingItem.totalPrice -= exsistingItem.price;
            }
        },
        setShowCart(state){
            state.showCart = !state.showCart;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;