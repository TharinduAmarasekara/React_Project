// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwPZvYyFcGo7jilJMg5x2vZgIM08CSJps",
  authDomain: "fir-auth-33a85.firebaseapp.com",
  projectId: "fir-auth-33a85",
  storageBucket: "fir-auth-33a85.appspot.com",
  messagingSenderId: "213116451903",
  appId: "1:213116451903:web:890f19755fbba9170d0c8a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };