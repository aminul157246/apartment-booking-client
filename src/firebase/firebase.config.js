import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB6_bzehv-t53Wi0STYtA1bP4eUm37hKG8",
  authDomain: "apartment-booking-3ab7e.firebaseapp.com",
  projectId: "apartment-booking-3ab7e",
  storageBucket: "apartment-booking-3ab7e.appspot.com",
  messagingSenderId: "522227168699",
  appId: "1:522227168699:web:012c2ac069db18d258009e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;