import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8MpJ_TNO09YgjL6qrJ_SGoHUf6XaTWc",
  authDomain: "discheck-dca75.firebaseapp.com",
  projectId: "discheck-dca75",
  storageBucket: "discheck-dca75.appspot.com",
  messagingSenderId: "268029751064",
  appId: "1:268029751064:web:ac885fb72c4d555a52b86d",
  measurementId: "G-KSZGNEKC1Q",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
