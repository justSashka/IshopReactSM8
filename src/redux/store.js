import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice/cartSlice'
import searchReducer from './slices/searchSlice/searchSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
})
