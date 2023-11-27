// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRn6a-3S6jedgwMw9w3OS2lvqUhcAnFGU",
    authDomain: "donaciones-c7b9f.firebaseapp.com",
    projectId: "donaciones-c7b9f",
    storageBucket: "donaciones-c7b9f.appspot.com",
    messagingSenderId: "580134469414",
    appId: "1:580134469414:web:5b887c0a0bc4a129e18be7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const idOnline = document.getElementById('donation-online');
const idOnlineInformation = document.getElementById('information-online');
const deducible = document.getElementById('deducible');
const informationDonor = document.getElementById('information-donor');

const idOffline = document.getElementById('donation-offline');
const idOfflineInformation = document.getElementById('information-offline');

function online() {
    idOnline.classList.remove("button-inactive");
    idOnline.classList.add("button-active");
    idOnlineInformation.style.display = "initial"
    
    idOffline.classList.remove("button-active");
    idOffline.classList.add("button-inactive");
    idOfflineInformation.style.display = "none"
}

function offline() {
    idOnline.classList.add("button-inactive");
    idOnline.classList.remove("button-active");
    idOnlineInformation.style.display = "none"
    
    idOffline.classList.add("button-active");
    idOffline.classList.remove("button-inactive");
    idOfflineInformation.style.display = "block"
}

function viewDeducible() {
    if (deducible.checked) {
        informationDonor.style.display = "block";
    } else {
        informationDonor.style.display = "none";
    }
}

function addDonador() {
    if (deducible.checked) {
        var sujeto = document.getElementById("sujeto");
        var rfc = document.getElementById("rfc");
        var email = document.getElementById("email");

        db.collection("donadores").add({
            sujeto: sujeto.value,
            rfc: rfc.value,
            email: email.value
        })
            .then(function (docRef) {
                console.log("Document writtem with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        sujeto.value = "";
        rfc.value = "";
        email.value = "";
    }
    alert("Se abrira Paypal en una nueva pestaña para completar la donación");
}