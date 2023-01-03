import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      if (!state.cart.includes(action.payload)) {
        state.cart.push(action.payload)
      }
    },
    removeItem() {
    },
  },
})
export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
