// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'realtyrise-4aaae.firebaseapp.com',
    projectId: 'realtyrise-4aaae',
    storageBucket: 'realtyrise-4aaae.appspot.com',
    messagingSenderId: '585562578171',
    appId: '1:585562578171:web:05fc9468afd7383bbb645e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
