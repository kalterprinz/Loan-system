import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD06zix5k6z7DYkNY8woBk7VYiLcvRofsg",
    authDomain: "loan-28be7.firebaseapp.com",
    projectId: "loan-28be7",
    storageBucket: "loan-28be7.firebasestorage.app",
    messagingSenderId: "122677316994",
    appId: "1:122677316994:web:8d4e7da2a2a58cbea4539b",
    measurementId: "G-NTJYCDTYHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const storage = getFirestore(app);

export { app, storage };