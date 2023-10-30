
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3X02RvVPAkuM1m5m1dYMLayoMF4GUzmg",
  authDomain: "login-register-relu.firebaseapp.com",
  projectId: "login-register-relu",
  storageBucket: "login-register-relu.appspot.com",
  messagingSenderId: "44622828785",
  appId: "1:44622828785:web:3a171f4b35af4d35cf8550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);