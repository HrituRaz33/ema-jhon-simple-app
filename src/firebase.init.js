// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ_5RB4BIv8Lm0rQ80exAvdYiiC8RE72E",
    authDomain: "ema-jhon-simple-react-89393.firebaseapp.com",
    projectId: "ema-jhon-simple-react-89393",
    storageBucket: "ema-jhon-simple-react-89393.appspot.com",
    messagingSenderId: "1075152236846",
    appId: "1:1075152236846:web:b950961aa62c8639108abf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;