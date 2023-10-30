import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    heartcart:[],
    quantity: 0
}

const cartSystem = createSlice({
    name: "user",
    initialState,
    reducers:
    {
        AddCart: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {
                const tempvar = { ...action.payload, quantity: 1 }
                state.cart.push(tempvar)
            }

        },
        AddHeartCart: (state, action) => {
            const find = state.heartcart.findIndex(item => item.id === action.payload.id)
            if (find >= 0) {
                state.heartcart[find].quantity += 1
            } else {
                const tempvar = { ...action.payload, quantity: 1 }
                state.heartcart.push(tempvar)
            }

        },
        RemoveFromHeartCart: (state, action) => {
            const index = state.heartcart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index >= 0) {
                state.heartcart.splice(index, 1);
            }
        },
    DecreaseCart: (state, action) => {
            const find = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (find >= 0 && state.cart[find].quantity > 1) {
                state.cart[find].quantity -= 1;
            }
        },
        RemoveFromCart: (state, action) => {
            const index = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index >= 0) {
                state.cart.splice(index, 1);
            }
        },
    }
})

export const { AddCart , DecreaseCart , RemoveFromCart,AddHeartCart,RemoveFromHeartCart  } = cartSystem.actions;
export default cartSystem.reducer;