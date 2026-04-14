import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exisitingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (exisitingItem) {
                exisitingItem.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload, quantity: 1,

                })
            }

        },

        //removeFromCart: (state, action) =>
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);

        },

        // updateQuality {state, action} => {}
        updateQuanlity: (state, action) => {
            const { id, quantity } = action.payload;
            if (quantity <= 0) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                const existingItem = state.items.find((item) => item.id === id)
                if (existingItem) {
                    existingItem.quantity = quantity

                }
            }
        },
      // clearCart:
      clearCart: (state) => {
        state.items = [];
      }


    },

})

export const { addToCart , removeFromCart, updateQuanlity, clearCart } = cartSlice.actions
export default cartSlice.reducer;