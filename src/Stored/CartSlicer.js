import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({

    name: "cartslice",

    initialState: {
        items: []
    },

    reducers: {

        addItems: (state, action) => {
            state.items.push({
                ...action.payload,
                quantity: 1
            });
        },

        incrementItem: (state, action) => {

            const element = state.items.find(
                item => item.id === action.payload.id
            );

            if (element) {
                element.quantity += 1;
            }
        },

        decrementItem: (state, action) => {

            const element = state.items.find(
                item => item.id === action.payload.id
            );

            if (element) {

                if (element.quantity > 1) {
                    element.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        item => item.id !== action.payload.id
                    );
                }

            }
        }

    }
});

export const {
    addItems,
    incrementItem,
    decrementItem
} = cart.actions;

export default cart.reducer;