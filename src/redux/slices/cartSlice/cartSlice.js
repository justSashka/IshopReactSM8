/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      if (!state.cart.includes(action.payload)) {
        state.cart.push(action.payload)
      }
      localStorage.setItem('cart', state.cart)
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((id) => id._id !== action.payload)
      localStorage.setItem('cart', state.cart)
    },
    incCartPrice(state, action) {
      state.cartPrice += action.payload
      localStorage.setItem('cartPrice', state.cartPrice)
    },
    decCartPrice(state, action) {
      state.cartPrice -= action.payload
      localStorage.setItem('cartPrice', state.cartPrice)
    },
  },
})
export const {
  addItem, removeItem, incCartPrice, decCartPrice,
} = cartSlice.actions
export default cartSlice.reducer
