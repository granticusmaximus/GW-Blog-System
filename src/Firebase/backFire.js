
import firebase from "firebase/app";
import database from "firebase/database";

const config = {
    apiKey: "AIzaSyCKrieKqeyIe0w5fgA4dLR7bbOI8cZcAnw",
    authDomain: "gw-blog-unauth.firebaseapp.com",
    databaseURL: "https://gw-blog-unauth.firebaseio.com",
    projectId: "gw-blog-unauth",
    storageBucket: "gw-blog-unauth.appspot.com",
    messagingSenderId: "306230543849",
    appId: "1:306230543849:web:a361f44852896ece12b778",
    measurementId: "G-FDY1DJERZ2"
};

let firebaseCache;
export const fire = () => {
    if (firebaseCache) {
        return firebaseCache;
    }

    firebase.initializeApp(config);
    firebaseCache = firebase;
    return firebase;
};