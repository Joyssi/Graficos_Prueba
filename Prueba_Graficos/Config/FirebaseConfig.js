import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCosiLJlK9dMchKM1-3PXjj89YRXxEO0Dk",
    authDomain: "prueba-cce40.firebaseapp.com",
    projectId: "prueba-cce40",
    storageBucket: "prueba-cce40.appspot.com",
    messagingSenderId: "196345303415",
    appId: "1:196345303415:web:49b0a507fb0b1389c85172",
    measurementId: "G-BQ8DPLJTBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;