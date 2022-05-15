import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZPt6UPgqGMjuAtZqxsSdrJEZCozJkfHI",
  authDomain: "sportskit-73e42.firebaseapp.com",
  projectId: "sportskit-73e42",
  storageBucket: "sportskit-73e42.appspot.com",
  messagingSenderId: "245399754499",
  appId: "1:245399754499:web:d5a9c33ca6f77be549bb36",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
