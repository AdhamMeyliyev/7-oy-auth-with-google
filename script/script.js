import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDIfq5dOGE81CRZAZSLfGEtYE_OnTOXp8",
  authDomain: "coin-auth-1.firebaseapp.com",
  projectId: "coin-auth-1",
  storageBucket: "coin-auth-1.appspot.com",
  messagingSenderId: "63283860119",
  appId: "1:63283860119:web:4f79f4d4fd0c46aa5acfd2",
  measurementId: "G-Y053ELF8VL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = "it";

let googleBtn = document.getElementById("googleBtn");

// let loginBtn = document.getElementById("login");

googleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      alert(result);
      window.location.href = "../home.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(error);
    });
});
