// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChzhdNrkQgg_UThBMWYgkneFxzSTZDOo4",
    authDomain: "photography-service-review.firebaseapp.com",
    projectId: "photography-service-review",
    storageBucket: "photography-service-review.appspot.com",
    messagingSenderId: "601990206681",
    appId: "1:601990206681:web:25af18ff349b1700db9ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;