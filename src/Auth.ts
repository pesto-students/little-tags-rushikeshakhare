import { auth } from "./services/firebase";
import { showToast } from "./utilities";

export const signInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};

export const signInWithFacebook = () => {
  const provider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(provider);
};

export const signInWithPhoneNumber = (phoneNumber: string) => {
  const globalWindow: any = window;
  globalWindow.recaptchaVerifier = new auth.RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
    }
  );
  const appVerifier = globalWindow.recaptchaVerifier;
  auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      confirmationResult
        .confirm("123456")
        .then((data: any) => console.log(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => {
  showToast(`Logged Out Successfully`);
  return auth().signOut();
};
