importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCCdJ9YirX__bPZEMTP2LwhSKZl2QNCTbU",
  authDomain: "telemetria-nano-dede4.firebaseapp.com",
  projectId: "telemetria-nano-dede4",
  storageBucket: "telemetria-nano-dede4.firebasestorage.app",
  messagingSenderId: "906041908876",
  appId: "1:906041908876:web:3cc110596a45ff09e4a5a9"
});

const messaging = firebase.messaging();
