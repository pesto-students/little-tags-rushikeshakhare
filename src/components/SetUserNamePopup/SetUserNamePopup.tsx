import React, { useState } from 'react';
import { Modal } from '../Modal';
import {
  SELECT_USER_NAME_ACTION_BUTTON_TEXT,
  SELECT_USER_NAME_INPUT_LABEL,
  SELECT_USER_NAME_SUCCESS_MESSAGE,
} from '../../AppConstants';
import { FormGroup } from '../FormGroup';
import { showToast } from '../../utilities';
import './setUserNamePopup.scss';

interface IConfirmationPopupProps {
  onSuccessButtonClick?: () => void;
  onCancelButtonClick?: () => void;
  setUserName: (payload: any) => Promise<any>;
}

export const SetUserNamePopup = ({
  onSuccessButtonClick = () => {},
  setUserName,
}: IConfirmationPopupProps) => {
  const [name, setName]: any = useState('');
  const [error, setError]: any = useState(null);

  const updateUserName = () => {
    setUserName(name)
      .then(() => {
        showToast(SELECT_USER_NAME_SUCCESS_MESSAGE);
        onSuccessButtonClick();
      })
      .catch(setError);
  };

  return (
    <Modal>
      <div className='user-name-popup'>
        <FormGroup>
          <label htmlFor='user-name-input' className='input-label'>
            {SELECT_USER_NAME_INPUT_LABEL}
            <span className='mandatory'>*</span>
          </label>
          <input
            type='text'
            value={name}
            className='input-control user-name'
            name='user-name-input-input'
            autoFocus={true}
            onChange={(e: any) => {
              const nextValue = e.target.value;
              setName(nextValue);
            }}
          />
        </FormGroup>

        <div className='user-name-popup-actions d-flex'>
          <button className='btn success-btn' disabled={!name} onClick={updateUserName}>
            {SELECT_USER_NAME_ACTION_BUTTON_TEXT}
          </button>
        </div>
        {error && <div className='phone-auth-popup-error'>{error?.message}</div>}
      </div>
    </Modal>
  );
};
