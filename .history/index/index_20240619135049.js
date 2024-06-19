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

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const campusemail = document.getElementById('campusemail').value;
  const campuspassword = document.getElementById('campuspassword').value;

  auth.signInWithEmailAndPassword(campusemail, campuspassword)
   .then((userCredential) => {
      // Send email verification
      userCredential.user.sendEmailVerification();
    })
   .catch((error) => {
      console.error(error);
    });
});