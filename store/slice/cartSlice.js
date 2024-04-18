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
      const name = action.payload;
      if (state.items[name]) {
        if (state.items[name].quantity > 1) {
          state.items[name].quantity -= 1;
        } else {
          delete state.items[name];
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
