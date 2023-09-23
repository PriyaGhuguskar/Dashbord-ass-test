import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyClP9rfONe04VtjQF51IxQv5exstZu9kgA",
    authDomain: "openinapp-30e99.firebaseapp.com",
    databaseURL: "https://openinapp-30e99-default-rtdb.firebaseio.com",
    projectId: "openinapp-30e99",
    storageBucket: "openinapp-30e99.appspot.com",
    messagingSenderId: "242348780131",
    appId: "1:242348780131:web:08281e83d419f8872aa656",
    measurementId: "G-S70PC22WDC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


