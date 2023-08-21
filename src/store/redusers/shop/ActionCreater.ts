import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces/Shop";
import { auth, firestore } from "../../../firebase-setup/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";

export const fetchProducts = createAsyncThunk(
  "user/fetchProducts",
  async (_: any, thunkApi) => {
    try {
      const promise = fetch("https://fakestoreapi.com/products?limit=30")
        .then((res) => res.json())
        .then(async (arr) => {
          if (!auth.currentUser) return arr;
          const favoriteList = await getFavorites(auth.currentUser.uid);

          if (!favoriteList) return arr;
          arr.forEach((product: any) => {
            let isFavorite = false;
            favoriteList.forEach((favorite) => {
              if (favorite.id === product.id) isFavorite = true;
            });
            product.isFavorite = isFavorite;
          });
          return arr as Array<any>;
        });
      const resultArr = (await promise).map((item: any) => {
        return {
          id: item.id,
          thumb: item.image,
          title: item.title,
          isFavorite: item.isFavorite,
          price: item.price,
          description: item.description,
          category: item.category,
        } as IProduct;
      });
      return resultArr as IProduct[];
    } catch (e: any) {
      console.log(e);
      return null;
    }
  }
);
export const fetchCategories = createAsyncThunk(
  "user/fetchCategories",
  async (_: any, thunkApi) => {
    try {
      const promise = fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((arr) => {
          return arr as Array<string>;
        });
      return (await promise) as Array<string>;
    } catch (e: any) {
      console.log(e);
      return null;
    }
  }
);
export const getFavorites = async (userID: string) => {
  const q = query(
    collection(firestore, "favorites"),
    where("userID", "==", userID)
  );
  const getFavoritesPromise = getDocs(q).then((querySnapshot) => {
    if (querySnapshot.empty) {
      return null;
    } else {
      let favoriteList = [];
      for (let i = 0; i < querySnapshot.docs.length; i++) {
        favoriteList.push({
          ...querySnapshot.docs[i].data(),
        });
      }
      return favoriteList;
    }
  });
  return await getFavoritesPromise;
};
