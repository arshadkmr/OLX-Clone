import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6TxGKH5q-LXIBLmRnX6UR95lk20-esDg",
  authDomain: "fir-37e25.firebaseapp.com",
  projectId: "fir-37e25",
  storageBucket: "fir-37e25.appspot.com",
  messagingSenderId: "269249268575",
  appId: "1:269249268575:web:74818074f7d1fc62a2c4ea",
  measurementId: "G-2NFWV6J7XV"
};

export default firebase.initializeApp(firebaseConfig);
