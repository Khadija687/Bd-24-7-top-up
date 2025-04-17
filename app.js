import { auth, db } from './firebase-config.js';
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const loginBtn = document.getElementById('loginBtn');
const gameBtns = document.querySelectorAll('.gameBtn');
const topupForm = document.getElementById('topupForm');
const gameName = document.getElementById('gameName');
const uidInput = document.getElementById('uid');

loginBtn.onclick = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};

gameBtns.forEach(btn => {
  btn.onclick = () => {
    gameName.textContent = "Top-Up for " + btn.dataset.game;
    topupForm.style.display = 'block';
  };
});