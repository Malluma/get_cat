import { createSlice } from '@reduxjs/toolkit';

const initialState = {catImage: '', enabled: true, autoRefresh: false};

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
      if (!state.enabled && state.autoRefresh) {
        state.autoRefresh = false;
      }
    },
    toggleAutoRefresh(state, action){
      state.autoRefresh = !state.autoRefresh;
    },
  }
  })

export const {loadCat, toggleEnabled, toggleAutoRefresh} = catSlice.actions;
export default catSlice.reducer;