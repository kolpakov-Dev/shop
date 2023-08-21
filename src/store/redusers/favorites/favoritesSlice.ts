import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces/Shop";
import {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
} from "./ActionCreater";

interface FavoritesState {
  favorites: IProduct[];
  loading: boolean;
  error: string;
}
const initialState: FavoritesState = {
  favorites: [],
  loading: false,
  error: "",
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    clearFavourites: (state, action) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.favorites?.push(action.payload!);
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.favorites = state.favorites!.filter((elem) => {
        elem.isFavorite = true;
        return elem.id !== action.payload?.id;
      });
      state.favorites?.forEach((element, index) => {
        element.isFavorite = true;
      });
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.favorites = action.payload;
    });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
