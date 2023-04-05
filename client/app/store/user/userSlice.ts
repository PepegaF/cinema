import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./user.interface";
import { getStoreLocal } from "utils/localStorage";
import { checkAuth, login, logout, register } from "./userActions";


const initialState: IInitialState = {
  user: getStoreLocal('user'),
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
  }
})

export default userSlice.reducer
export const { } = userSlice.actions
