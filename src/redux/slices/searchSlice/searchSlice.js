/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    searchArray: [],
  },
  reducers: {
    changeValue(state, action) {
      state.searchValue = action.payload
    },
    clearValue(state, action) {
      state.searchValue = action.payload
    },
    setSearchArray(state, action) {
      state.searchArray = action.payload
    },
  },
})
export const {
  changeValue, setSearchArray, clearValue,
} = searchSlice.actions
export default searchSlice.reducer
