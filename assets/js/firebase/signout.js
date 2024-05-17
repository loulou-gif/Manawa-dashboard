// Import des fonctions Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

// Déconnexion
document.querySelector('.logout-button').addEventListener('click', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du bouton

  // Déconnexion de l'utilisateur
  signOut(auth)
    .then(() => {
      // Déconnexion réussie
      console.log("Utilisateur déconnecté avec succès");
      // Rediriger l'utilisateur vers la page de connexion
      window.location.href = "../pages/sign-in.html";
    })
    .catch((error) => {
      // Gestion des erreurs lors de la déconnexion
      console.error("Erreur lors de la déconnexion:", error);
    });
});
