import { configureStore } from "@reduxjs/toolkit";
import catReducer from './reducers/CatSlice'

export const store = configureStore({
    reducer: {
      cat: catReducer
    }
  })