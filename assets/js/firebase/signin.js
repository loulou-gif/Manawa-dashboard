// Import des fonctions Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
const auth = getAuth(app); // Utilisation de getAuth pour obtenir une instance d'authentification

// Enregistrement
document.getElementById('signin-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher la soumission du formulaire par défaut

  // Récupération des valeurs des champs email et password
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Création d'un nouvel utilisateur avec l'email et le mot de passe
  signInWithEmailAndPassword(auth, email, password) // Utilisation de signInWithEmailAndPassword avec l'instance auth
    .then((userCredential) => {
      // Utilisateur créé avec succès
      const user = userCredential.user;
      console.log("Utilisateur créé avec succès:", user);
      // Gérer la suite du processus (par exemple, rediriger l'utilisateur)
      window.location.href = "../pages/dashboard.html";
    })
    .catch((error) => {
      // Gestion des erreurs lors de la création de l'utilisateur
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur lors de la création de l'utilisateur:", errorCode, errorMessage);
    });
});

console.log('5')