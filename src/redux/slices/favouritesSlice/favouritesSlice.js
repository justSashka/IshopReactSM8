/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouritesIdArray: JSON.parse(window.localStorage.getItem('favouritesArray')) || [],
  },
  reducers: {
    addFavoritesId(state, action) {
      if (!state.favouritesIdArray.includes(action.payload)) {
        state.favouritesIdArray.push(action.payload)
        localStorage.setItem('favouritesArray', JSON.stringify(state.favouritesIdArray))
      } else {
        state.favouritesIdArray = state.favouritesIdArray.filter((id) => id !== action.payload)
        localStorage.setItem('favouritesArray', JSON.stringify(state.favouritesIdArray))
      }
    },
  },
})
export const {
  addFavoritesId,
} = favouritesSlice.actions
export default favouritesSlice.reducer
