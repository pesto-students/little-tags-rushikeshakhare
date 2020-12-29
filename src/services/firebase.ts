import firebase from "firebase";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
