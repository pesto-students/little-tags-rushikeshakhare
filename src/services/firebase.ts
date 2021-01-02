import firebase from "firebase";
import firebaseConfig from "./firebase.config";
import { showToast } from "../utilities";

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
    showToast(`Logged Out Successfully`);
    return this.firebaseAuth().signOut();
  };

  signInWithPhoneNumber = (phoneNumber: string) => {
    const globalWindow: any = window;
    globalWindow.recaptchaVerifier = new this.firebaseAuth().RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
      }
    );
    const appVerifier = globalWindow.recaptchaVerifier;
    this.firebaseAuth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult: any) => {
        confirmationResult
          .confirm("123456")
          .then((data: any) => console.log(data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
}
const firebaseInstance = new Firebase(firebaseConfig);

export { firebaseInstance as firebase };
