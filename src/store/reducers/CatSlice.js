import { createSlice } from '@reduxjs/toolkit';

const initialState = {catImage: '', enabled: true, autoRefrash: false};

const catSlice = createSlice(
  {name: 'catData',
  initialState,
  reducers: {
    loadCat(state, action){
      const catImageURL = action.payload[0].url;
      state.catImage = catImageURL;
    },
    toggleEnabled(state, action){
      state.enabled = !state.enabled;
    },
    toggleAutoRefrash(state, action){
      state.autoRefrash = !state.autoRefrash;
    },
  }
  })

export const {loadCat, toggleEnabled, toggleAutoRefrash} = catSlice.actions;
export default catSlice.reducer;