import { configureStore } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr';
import userSlice from './user/userSlice';


export const store = configureStore({
  reducer: {
    toastr: toastrReducer,
    user: userSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
