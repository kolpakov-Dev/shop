import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "@firebase/firestore";
import { auth, firestore } from "../../../firebase-setup/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOrder } from "../../../interfaces/iOrder";
import { ICart } from "../../../interfaces/iCart";
export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async (_: any, thunkApi) => {
    const orderJson = JSON.stringify(_.items);
    const currDate = new Date().toLocaleString() + "";
    const currentUser = auth.currentUser;
    const ref = collection(firestore, "Orders"); // Firebase creates this automatically
    let data = {
      body: orderJson,
      date: currDate,
      price: _.price,
      userID: currentUser?.uid,
    };
    try {
      addDoc(ref, data);
      return { items: _.items, date: currDate, price: _.price };
    } catch (err: any) {
      console.log(err.message);
      return null;
    }
  }
);
export const fetchOrders = createAsyncThunk(
  "cart/fetchOrders",
  async (_: any, thunkApi) => {
    let resArr;

    const currentUser = auth.currentUser;
    if (!currentUser) {
      return [];
    }
    try {
      const q = query(
        collection(firestore, "Orders"),
        where("userID", "==", currentUser?.uid)
      );
      const ref = await getDocs(q);
      let tmp = ref.docs.map((element) => {
        return { ...element.data() };
      });
      resArr = tmp.map((elem) => {
        return {
          items: JSON.parse(elem.body) as ICart[],
          date: elem.date as string,
          price: elem.price as number,
        };
      });
      return resArr as IOrder[];
    } catch (err: any) {
      console.log(err.message);
      return [];
    }
  }
);
