import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: {}};

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      if (state.items[item.name]) {
        state.items[item.name].quantity += 1;
      } else {
        state.items[item.name] = {...item, quantity: 1};
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
      }
    },
    clearCart(state) {
      state.items = {};
    },
  },
});

export const {addItemToCart, removeItemFromCart, clearCart} =
  counterSlice.actions;
export default counterSlice.reducer;
