// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsTFFIyei5zzz_oFu6ccU0HVG0lrLlhXQ",
  authDomain: "netflix-clone-3cfd1.firebaseapp.com",
  projectId: "netflix-clone-3cfd1",
  storageBucket: "netflix-clone-3cfd1.appspot.com",
  messagingSenderId: "64691298692",
  appId: "1:64691298692:web:1331b5168bb785740a3dd1",
  measurementId: "G-09KGXDZPSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)