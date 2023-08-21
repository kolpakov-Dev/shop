import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces/Shop";
import { fetchCategories, fetchProducts } from "./ActionCreater";

interface ShopState {
  products: IProduct[] | null;
  categories: string[] | null;
  loading: boolean;
  error: string;
}
const initialState: ShopState = {
  products: null,
  categories: null,
  loading: false,
  error: "",
};

export const ShopSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.products?.forEach((elem) => {
        if (elem.id === action.payload.id) elem.isFavorite = !elem.isFavorite;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload as IProduct[] | null;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload as string[] | null;
    });
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const ShopReducer = ShopSlice.reducer;
