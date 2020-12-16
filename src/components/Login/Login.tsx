import * as React from "react";
import googleLogo from "../../assets/images/google.svg";
import facebookLogo from "../../assets/images/facebook.svg";
import "./login.scss";

interface ILoginProps {
  onGoogleAccountClick: () => void;
  onFacebookAccountClick: () => void;
}

export const Login = ({
  onGoogleAccountClick,
  onFacebookAccountClick,
}: ILoginProps) => {
  return (
    <div className="login">
      <div className="login-card">
        <div className="login-card-title">
          <h1>Log In / Sign Up</h1>
        </div>
        <div className="login-card-subtitle">
          <h4>Log In / Sign Up Using Your</h4>
        </div>
        <button
          type="button"
          className="btn d-flex btn-auth-provider"
          onClick={onGoogleAccountClick}
        >
          <img src={googleLogo} alt="Google Logo" />
          <h4>Google Account</h4>
        </button>
        <button
          type="button"
          className="btn d-flex btn-auth-provider"
          onClick={onFacebookAccountClick}
        >
          <img src={facebookLogo} alt="Facebook Logo" />
          <h4>Facebook Account</h4>
        </button>
      </div>
    </div>
  );
};
