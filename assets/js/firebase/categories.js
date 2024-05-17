// Import des fonctions Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { collection, addDoc, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
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
const db = getFirestore(app)
const storage = getStorage(app)

document.getElementById('create').addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    const nom = document.querySelector('input[name="nom"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const image = document.getElementById('customFile').files[0];

    // Télécharger l'image vers Firebase Storage
    const imageRef = ref(storage, 'images/' + image.name);
    await uploadBytes(imageRef, image);

    // Récupérer l'URL de l'image téléchargée
    const imageUrl = await getDownloadURL(imageRef);

    // Créer un objet avec les données du formulaire
    const newData = {
        nom: nom,
        description: description,
        imageUrl: imageUrl // Stockez l'URL de l'image après l'avoir téléchargée vers Firebase Storage
    };

    try {
        // Envoyer les données vers Cloud Firestore
        const docRef = await addDoc(collection(db, 'catégories'), newData);
        console.log("Document ajouté avec l'ID :", docRef.id);

        // Réinitialiser le formulaire si nécessaire
        document.querySelector('form').reset();
    } catch (error) {
        console.error("Erreur lors de l'envoi des données à Firestore :", error);
    }
});

// Récupérer une référence vers le tbody du tableau HTML
const tableBody = document.querySelector('tbody');

// Fonction pour récupérer et afficher les données depuis Firestore
async function fetchAndDisplayData() {
    try {
        // Récupérer les données depuis Firestore
        const querySnapshot = await getDocs(collection(db, 'catégories'));
        console.log(querySnapshot.docs)
        // console.log(tableBody.innerHTML)

        // Réinitialiser le contenu du tbody
        tableBody.innerHTML = '';

        
        // Pour chaque document dans la collection
        querySnapshot.forEach(doc => {
            // Récupérer les données du document
            const data = doc.data();
            console.log(data)
            // Créer une nouvelle ligne dans le tableau HTML
            const newRow = document.createElement('tr');
            
            newRow.innerHTML = `
                <td>
                    <div class="d-flex px-2 py-2">
                        <div>
                            <img src="${data.imageUrl}" class="avatar avatar-sm me-3 border-radius-lg" alt="category-image">
                        </div>
                        <div class="d-flex flex-column justify-content-start">
                            <h6 class="mb-0 text-sm">${data.nom}</h6>
                            <p class="text-xs text-secondary mb-0">${data.description}</p>
                        </div>
                    </div>
                </td>
                <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">${new Date().toLocaleDateString()}</span>
                </td>
                <td class="align-middle">
                    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                        Edit
                    </a>
                </td>
            `;
            // Ajouter la nouvelle ligne au tbody du tableau HTML
            tableBody.appendChild(newRow);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des données depuis Firestore :", error);
    }
}

// Appeler la fonction pour récupérer et afficher les données lors du chargement de la page
fetchAndDisplayData();
