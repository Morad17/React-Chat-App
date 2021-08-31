import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyBSkDD6g2MUjb4Kn029qO62p0CGQH5utcQ",
        authDomain: "react-chat-4a617.firebaseapp.com",
        projectId: "react-chat-4a617",
        storageBucket: "react-chat-4a617.appspot.com",
        messagingSenderId: "582714162828",
        appId: "1:582714162828:web:db94b3ba4f44124b3605a9"
}).auth()