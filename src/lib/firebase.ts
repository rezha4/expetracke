import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ_Mg4GLQXMRbYKvsPhDSt8AHeQcwsNU4",
  authDomain: "expetracke.firebaseapp.com",
  projectId: "expetracke",
  storageBucket: "expetracke.appspot.com",
  messagingSenderId: "848294073715",
  appId: "1:848294073715:web:27e0965156f4ed64ea6106",
  measurementId: "G-6MHT193TRN"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}
