import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redusers/user/UserSlice";
import { ShopReducer } from "./redusers/shop/ShopSlice";
import { favoritesReducer } from "./redusers/favorites/favoritesSlice";
import { cartReducer } from "./redusers/cart/cartSlice";

const rootReducer = combineReducers({
  userReducer,
  ShopReducer,
  favoritesReducer,
  cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
