
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//
import { dispatch } from './store';

const initialState = {
  isLoading: false,
  error: null,
  username: '',
  books:[],
  input: '',
  wishlist: [],
};

const bookReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    
     // GET BOOKS SUCCESS
     getBooksSuccess(state, action) {
      state.books = action.payload;
    },


    // ADD USERNAME
    addUsername(state, action) {
      state.username = action.payload
    },

     // ADD INPUT
     addInput(state, action) {
      state.input = action.payload
    },

    // ADD WISHLIST
    addWhishlist(state, action) {
      state.wishlist.push(action.payload)
    },

    // REMOVE WISHLIST
    removeWishlist(state, action) {
      const removedBook = state.wishlist.filter((book) => book.volumeInfo.title !== action.payload);
      state.wishlist = removedBook;
    },

  }
});

// ----------------------------------------------------------------------


export default bookReducer.reducer

// Actions
export const {
  addUsername,
  addInput,
  addWhishlist,
  removeWishlist,
} = bookReducer.actions;


export function getBooks(search) {
  return async () => {
    dispatch(bookReducer.actions.startLoading());
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=20`);
      dispatch(bookReducer.actions.getBooksSuccess(response.data.items));
      console.log(search)
    } catch (error) {
      dispatch(bookReducer.actions.hasError(error));
    }
  };
}
