// Import des fonctions Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDV6hBrapqdck7-7cW57QgYZ4i13rCXkhw",
  authDomain: "manawa-test.firebaseapp.com",
  databaseURL: "https://manawa-test-default-rtdb.firebaseio.com",
  projectId: "manawa-test",
  storageBucket: "manawa-test.appspot.com",
  messagingSenderId: "485663881489",
  appId: "1:485663881489:web:03125415202708e132f4b0",
  measurementId: "G-L3VW6G4WX2"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);