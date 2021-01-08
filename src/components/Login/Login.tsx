import React, { useState } from 'react';
import googleLogo from '../../assets/images/google.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import closeIcon from '../../assets/images/close.svg';
import phoneIcon from '../../assets/images/phone-solid.svg';
import {
  LOGIN_TITLE,
  LOGIN_SUBTITLE,
  LOGIN_WITH_FACEBOOK_TEXT,
  LOGIN_WITH_GOOGLE_TEXT,
  LOGIN_WITH_FACEBOOK_PLACEHOLDER,
  LOGIN_WITH_GOOGLE_PLACEHOLDER,
  LOGIN_WITH_PHONE_TEXT,
} from '../../AppConstants';
import { FormGroup } from '../FormGroup';
import { PopupUtility } from '../../utilities';
import { PhoneAuthPopup } from '../PhoneAuthPopup';
import './login.scss';
interface ILoginProps {
  onGoogleAccountClick: () => void;
  onFacebookAccountClick: () => void;
  onClose: () => void;
  error?: any;
}

export const Login = ({
  onGoogleAccountClick,
  onFacebookAccountClick,
  onClose,
  error,
}: ILoginProps) => {
  const [showPhoneAuth, setShowPhoneAuth] = useState(false);

  const onPhoneNumberAuthClick = () => {
    setShowPhoneAuth(true);
    PopupUtility(PhoneAuthPopup, {})
      .then(() => setShowPhoneAuth(false))
      .catch(() => setShowPhoneAuth(false));
  };
  if (showPhoneAuth) return null;
  return (
    <div className='login-card'>
      <div className='login-card-close'>
        <button type='button' className='btn d-flex' onClick={onClose}>
          <img src={closeIcon} alt='Close Button' />
        </button>
      </div>
      <div className='login-card-title'>
        <h1>{LOGIN_TITLE}</h1>
      </div>
      <div className='login-card-subtitle'>
        <h4>{LOGIN_SUBTITLE}</h4>
      </div>
      <FormGroup>
        <button
          type='button'
          className='btn d-flex btn-auth-provider'
          onClick={onGoogleAccountClick}
        >
          <img src={googleLogo} alt={LOGIN_WITH_GOOGLE_PLACEHOLDER} />
          <h4>{LOGIN_WITH_GOOGLE_TEXT}</h4>
        </button>
      </FormGroup>
      <FormGroup>
        <button
          type='button'
          className='btn d-flex btn-auth-provider'
          onClick={onFacebookAccountClick}
        >
          <img src={facebookLogo} alt={LOGIN_WITH_FACEBOOK_PLACEHOLDER} />
          <h4>{LOGIN_WITH_FACEBOOK_TEXT}</h4>
        </button>
      </FormGroup>

      <FormGroup>
        <button
          type='button'
          className='btn d-flex btn-auth-provider'
          onClick={onPhoneNumberAuthClick}
        >
          <img src={phoneIcon} alt={LOGIN_WITH_FACEBOOK_PLACEHOLDER} />
          <h4>{LOGIN_WITH_PHONE_TEXT}</h4>
        </button>
      </FormGroup>

      {error && <div className='login-card-error'>{error}</div>}
    </div>
  );
};
