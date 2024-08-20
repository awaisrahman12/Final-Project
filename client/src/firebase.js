// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'realestate-8f842.firebaseapp.com',
  projectId: 'realestate-8f842',
  storageBucket: 'realestate-8f842.appspot.com',
  messagingSenderId: '1081788327977',
  appId: '1:1081788327977:web:09ff768caa0e78adc39438',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
