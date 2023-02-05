import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice/cartSlice'
import searchReducer from './slices/searchSlice/searchSlice'
import userReducer from './slices/userSlice/userSlice'
import sortReducer from './slices/sortSlice/sortSlice'
import favouritesReducer from './slices/favouritesSlice/favouritesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    user: userReducer,
    favourites: favouritesReducer,
    sort: sortReducer,
  },
})
