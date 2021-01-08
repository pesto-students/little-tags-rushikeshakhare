import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { firebase } from '../../services/firebase';
import { CAPTCHA_CONTAINER_ID } from '../../AppConfig';
import {
  CONFIRMATION_POPUP_CANCEL_BUTTON_TEXT,
  PHONE_AUTH_OTP_SENT_MESSAGE,
  PHONE_AUTH_ENTER_OTP_LABEL,
  PHONE_AUTH_ENTER_PHONE_LABEL,
  PHONE_AUTH_PHONE_NUMBER_LENGTH,
  PHONE_AUTH_OTP_LENGTH,
  PHONE_AUTH_BUTTON_TEXT_LOADING,
  PHONE_AUTH_BUTTON_TEXT_VERIFY_OTP,
  PHONE_AUTH_BUTTON_TEXT_REQUEST_OTP,
} from '../../AppConstants';
import { FormGroup } from '../FormGroup';
import { showToast } from '../../utilities';
import './phoneAuthPopup.scss';

interface IConfirmationPopupProps {
  cancelButtonText?: string;
  onSuccessButtonClick?: () => void;
  onCancelButtonClick?: () => void;
}

export const PhoneAuthPopup = ({
  cancelButtonText = CONFIRMATION_POPUP_CANCEL_BUTTON_TEXT,
  onSuccessButtonClick = () => {},
  onCancelButtonClick = () => {},
}: IConfirmationPopupProps) => {
  const [phoneNumber, setPhoneNumber]: any = useState('');
  const [otp, setOtp]: any = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation]: any = useState(null);
  const [error, setError]: any = useState(null);

  const requestOtp = () => {
    setLoading(true);
    firebase.signInWithPhoneNumber(`+91${phoneNumber}`, setConfirmation, setError);
  };

  const verifyOtp = () => {
    if (isOTPSent()) {
      setError(null);
      setLoading(true);
      confirmation
        .confirm(otp)
        .then(() => {
          onSuccessButtonClick();
          setLoading(false);
        })
        .catch((error: any) => {
          setLoading(false);
          setError(error);
        });
    }
  };

  const isOTPSent = () => confirmation && confirmation.confirm;

  const onNumberInputChange = (e: any) => {
    const nextValue = e.target.value;
    if (isOTPSent()) {
      if (nextValue.length <= PHONE_AUTH_OTP_LENGTH) setOtp(nextValue);
      return;
    }

    if (nextValue.length <= PHONE_AUTH_PHONE_NUMBER_LENGTH) setPhoneNumber(nextValue);
  };

  useEffect(() => {
    if (isOTPSent()) {
      showToast(PHONE_AUTH_OTP_SENT_MESSAGE);
      setLoading(false);
    }
  }, [confirmation]);

  return (
    <Modal>
      <div className='phone-auth-popup'>
        <FormGroup>
          <label htmlFor='phone-number-input' className='input-label'>
            {isOTPSent() ? PHONE_AUTH_ENTER_OTP_LABEL : PHONE_AUTH_ENTER_PHONE_LABEL}{' '}
            <span className='mandatory'>*</span>
          </label>
          <input
            type='number'
            value={isOTPSent() ? otp : phoneNumber}
            className='input-control phone-number'
            name='phone-number-input'
            autoFocus={true}
            onChange={onNumberInputChange}
          />
        </FormGroup>

        <div className='phone-auth-popup-actions d-flex'>
          <button
            className='btn success-btn'
            disabled={
              loading ||
              (isOTPSent()
                ? otp.length !== PHONE_AUTH_OTP_LENGTH
                : phoneNumber.length !== PHONE_AUTH_PHONE_NUMBER_LENGTH)
            }
            onClick={isOTPSent() ? verifyOtp : requestOtp}
          >
            {loading && PHONE_AUTH_BUTTON_TEXT_LOADING}
            {!!isOTPSent() && !loading && PHONE_AUTH_BUTTON_TEXT_VERIFY_OTP}
            {!isOTPSent() && !loading && PHONE_AUTH_BUTTON_TEXT_REQUEST_OTP}
          </button>
          <div id={CAPTCHA_CONTAINER_ID} />
          <button className='btn cancel-btn' onClick={onCancelButtonClick} disabled={loading}>
            {cancelButtonText}
          </button>
        </div>
        {error && <div className='phone-auth-popup-error'>{error?.message}</div>}
      </div>
    </Modal>
  );
};
