import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPHxnRxoV81eqMYfHahbPCbDwdGvDRLHI",
  authDomain: "ggweb-d6cdf.firebaseapp.com",
  projectId: "ggweb-d6cdf",
  storageBucket: "ggweb-d6cdf.firebasestorage.app",
  messagingSenderId: "734632280776",
  appId: "1:734632280776:web:76ee0af2c4773929b91bfd",
  measurementId: "G-5GFXLGLTNT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };