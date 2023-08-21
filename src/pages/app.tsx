import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home/home";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Catalogue from "./Catalogue/catalogue";
import Product from "./Product/product";
import Favorites from "./Favorites/favorites";
import Cart from "./Cart/cart";
import Profile from "./Profile/Profile";
import { useAppDispatch } from "../hooks/redux";
import {
  fetchCategories,
  fetchProducts,
} from "../store/redusers/shop/ActionCreater";
import { getUser } from "../store/redusers/user/ActionCreater";
import { fetchFavorites } from "../store/redusers/favorites/ActionCreater";
import { fetchOrders } from "../store/redusers/cart/ActionCreater";
export const App = () => {
  const dispatch = useAppDispatch();
  useMemo(() => {
    dispatch(getUser(""));
    dispatch(fetchProducts(""));
    dispatch(fetchCategories(""));
    dispatch(fetchFavorites(""));
    dispatch(fetchOrders(""));
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Catalogue />} />
        <Route path="/shop/:category" element={<Catalogue />} />
        <Route path="/shop/product/:productHref" element={<Product />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};
