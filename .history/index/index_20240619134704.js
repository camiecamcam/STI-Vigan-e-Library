import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbWyVqhZdWL5tGF5Y2YXRpY5PJLC0ee6M",
  authDomain: "elibrarylogin-3d7e6.firebaseapp.com",
  projectId: "elibrarylogin-3d7e6",
  storageBucket: "elibrarylogin-3d7e6.appspot.com",
  messagingSenderId: "872832392728",
  appId: "1:872832392728:web:10489984713141407ded6d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const email = "user@example.com"; // Replace with user input
const password = "password123"; // Replace with user input

auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Send email verification
    userCredential.user.sendEmailVerification();
  })
  .catch((error) => {
    console.error(error);
  });

  