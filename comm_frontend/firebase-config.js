// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB0_YK_PxszesTfZq8KWKUscuCv0DH9gGQ",
	authDomain: "codereview-27886.firebaseapp.com",
	projectId: "codereview-27886",
	storageBucket: "codereview-27886.appspot.com",
	messagingSenderId: "345023825238",
	appId: "1:345023825238:web:d3a7f8a571af0159e242f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
