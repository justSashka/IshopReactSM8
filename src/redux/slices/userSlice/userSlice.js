/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    },
    syncTokenWithLS(state, action) {
      if (state.token === null) { state.token = action.payload }
    },
  },
})
export const {
  setToken, syncTokenWithLS,
} = userSlice.actions
export default userSlice.reducer
