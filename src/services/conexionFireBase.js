
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBi47arkT988iTu12ky5xwg-F2-3OH7ccE",
    authDomain: "tiandasuradamb.firebaseapp.com",
    projectId: "tiandasuradamb",
    storageBucket: "tiandasuradamb.appspot.com",
    messagingSenderId: "943787868479",
    appId: "1:943787868479:web:fdab0eb072b21f2de3938a",
    measurementId: "G-GM1XHHMSSS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
