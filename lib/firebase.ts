import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3iDOgb5__CH93gdOmRBmp9SJfg5t8bMA",
  authDomain: "brasil-org-ofc.firebaseapp.com",
  projectId: "brasil-org-ofc",
  storageBucket: "brasil-org-ofc.firebasestorage.app",
  messagingSenderId: "6647327645",
  appId: "1:6647327645:web:b1cd3696dc94fcb3395d74"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
