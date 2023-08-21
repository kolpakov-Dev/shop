import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKqcKaKe2XDg8fKshQFhDt0sGb0qL7R90",
  authDomain: "shop-93a40.firebaseapp.com",
  projectId: "shop-93a40",
  storageBucket: "shop-93a40.appspot.com",
  messagingSenderId: "625728833417",
  appId: "1:625728833417:web:cab6a52f4a4e1b31d94358",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { app, auth, firestore, signOut };
