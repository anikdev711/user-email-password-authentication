// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp9sRVKZPEjU3Dysm_Qu6P2qBEoa3apDw",
  authDomain: "user-email-password-auth-8f444.firebaseapp.com",
  projectId: "user-email-password-auth-8f444",
  storageBucket: "user-email-password-auth-8f444.appspot.com",
  messagingSenderId: "260420914565",
  appId: "1:260420914565:web:5c1259436d1170c17fc8ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth;