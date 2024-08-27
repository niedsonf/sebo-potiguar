// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxlhfMMQHA9ks71ACkf1KTL1fL49lFbC0",
    authDomain: "sebo-potiguar.firebaseapp.com",
    projectId: "sebo-potiguar",
    storageBucket: "sebo-potiguar.appspot.com",
    messagingSenderId: "360717953061",
    appId: "1:360717953061:web:6d7ee4f4aedae2e9b0b7cc",
    measurementId: "G-K100SH5M20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;