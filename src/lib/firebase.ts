// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ_Mg4GLQXMRbYKvsPhDSt8AHeQcwsNU4",
  authDomain: "expetracke.firebaseapp.com",
  projectId: "expetracke",
  storageBucket: "expetracke.appspot.com",
  messagingSenderId: "848294073715",
  appId: "1:848294073715:web:27e0965156f4ed64ea6106",
  measurementId: "G-6MHT193TRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
