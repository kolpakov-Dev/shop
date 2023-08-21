import { createSlice } from "@reduxjs/toolkit";

import { ICart } from "../../../interfaces/iCart";
import { createOrder, fetchOrders } from "./ActionCreater";
import { IOrder } from "../../../interfaces/iOrder";

interface CartState {
  cart: ICart[];
  orders: IOrder[];
  count: number;
  price: number;
  loading: boolean;
  error: string;
}
const initialState: CartState = {
  cart: [],
  orders: [],
  count: 0,
  price: 0,
  loading: false,
  error: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const inCart = state.cart.findIndex((el) => {
        return el.id === action.payload.id;
      });

      if (inCart !== -1) {
        state.cart[inCart].count += 1;
        state.count += 1;
        state.price = getFullPrice(state.cart);
        return;
      }
      state.cart.push({
        id: action.payload.id,
        thumb: action.payload.thumb,
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        category: action.payload.category,
        count: 1,
      });
      state.count += 1;
      state.price = getFullPrice(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart!.filter((elem) => elem.id !== action.payload?.id);
      state.count -= action.payload.count;
      state.price = getFullPrice(state.cart);
    },
    decrementCartItemCount: (state, action) => {
      const inCart = state.cart.findIndex((el) => {
        return el.id === action.payload.id;
      });
      state.count -= 1;
      if (state.cart[inCart].count > 1) {
        state.cart[inCart].count -= 1;
        state.price = getFullPrice(state.cart);
        return;
      }
      state.cart = state.cart!.filter((elem) => elem.id !== action.payload?.id);
      state.price = getFullPrice(state.cart);
    },
    changeCount: (state, action) => {
      const inCart = state.cart.findIndex((el) => {
        return el.id === action.payload.item.id;
      });
      if (action.payload.count > 0) {
        state.cart[inCart].count = Number(action.payload.count);
      }
      state.count = getCount(state.cart);
      state.price = getFullPrice(state.cart);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders.push(action.payload as IOrder);
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
  },
});
const getCount = (items: ICart[] | []) => {
  let resultCount = 0;
  if (!items.length) {
    return 0;
  }
  items.forEach((element) => {
    resultCount += element.count;
  });
  return resultCount;
};
const getFullPrice = (items: ICart[] | []) => {
  let resultPrice = 0;
  if (!items.length) {
    return 0;
  }
  items.forEach((element) => {
    resultPrice += Number(element.count * element.price!);
  });
  return +resultPrice.toFixed(2);
};
export const cartReducer = CartSlice.reducer;
