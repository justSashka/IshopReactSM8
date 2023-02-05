/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    value: '',
  },
  reducers: {
    setSortValue(state, action) {
      state.value = action.payload
    },
    clearSort(state) {
      state.value = ''
      return state
    },
  },
})
export const {
  setSortValue, clearSort,
} = sortSlice.actions
export default sortSlice.reducer
