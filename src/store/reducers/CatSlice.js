import { createSlice } from '@reduxjs/toolkit';

const initialState = {catImage: ''};

const catSlice = createSlice(
  {name: 'catData',
  initialState,
  reducers: {
    loadCat(state, action){
      console.log('REDUCER')
      const catImageURL = action.payload[0].url;
      console.log('URL!!!')
      console.log(catImageURL)
      state.catImage = catImageURL;
    },
  }
  })

export const {loadCat} = catSlice.actions;
export default catSlice.reducer;