import firebase from "firebase";
import firebaseConfig from "./firebase.config";
import { CAPTCHA_CONTAINER_ID } from "../AppConfig";

export class Firebase {
  public firebaseAuth: any = null;
  public firebaseDB: any = null;

  constructor(config: any) {
    firebase.initializeApp(config);
    this.firebaseAuth = firebase.auth;
    this.firebaseDB = firebase.database();
  }

  signInWithGoogle = () => {
    const provider = new this.firebaseAuth.GoogleAuthProvider();
    return this.firebaseAuth().signInWithPopup(provider);
  };

  signInWithFacebook = () => {
    const provider = new this.firebaseAuth.FacebookAuthProvider();
    return this.firebaseAuth().signInWithPopup(provider);
  };

  signOut = () => {
    return this.firebaseAuth().signOut();
  };

  signInWithPhoneNumber = (
    phoneNumber: string,
    successCallback: any,
    errorCallback: any
  ) => {
    const globalWindow: any = window;
    globalWindow.recaptchaVerifier = new this.firebaseAuth.RecaptchaVerifier(
      CAPTCHA_CONTAINER_ID,
      {
        size: "invisible",
      }
    );
    const appVerifier = globalWindow.recaptchaVerifier;
    this.firebaseAuth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(successCallback)
      .catch(errorCallback);
  };
}
const firebaseInstance = new Firebase(firebaseConfig);

export { firebaseInstance as firebase };
