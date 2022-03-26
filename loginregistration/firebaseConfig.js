// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGKlzF8_bd7pO5EeRIYs2D7pQeL8Q3yKQ",
  authDomain: "pruebatecn-f9a64.firebaseapp.com",
  projectId: "pruebatecn-f9a64",
  storageBucket: "pruebatecn-f9a64.appspot.com",
  messagingSenderId: "493132787275",
  appId: "1:493132787275:web:aa1ce115f45bd75fea27ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}