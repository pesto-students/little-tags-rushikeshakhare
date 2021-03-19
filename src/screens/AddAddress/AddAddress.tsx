import * as React from 'react';
import { FormGroup, Dropdown } from '../../components';
import { ADD_ADDRESS } from '../../AppConstants';
import { states } from '../../mockData';
import { useState } from 'react';
import { connect } from '../../store';
import { Address, IAddress } from '../../models/address';
import { useAddress } from '../../hooks/useAddress';
import { validEmailRegex, showToast } from '../../utilities';
import './addAddress.scss';
import { ROUTES } from '../../AppConfig';

interface IAddAddressProps {
  history: any;
}

export const AddAddress = connect()(({ history }: IAddAddressProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [state, setState] = useState('Maharashtra');
  const [pincode, setPincode] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    pincode: '',
  });

  const { addAddress } = useAddress();

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        if (value.length === 0) errors.firstName = ADD_ADDRESS.FIRST_NAME_VALIDATION_MESSAGE;
        else errors.firstName = '';
        setFirstName(value);
        break;

      case 'lastName':
        if (value.length === 0) errors.lastName = ADD_ADDRESS.LAST_NAME_VALIDATION_MESSAGE;
        else errors.lastName = '';
        setLastName(value);
        break;

      case 'email':
        if (value.length === 0) errors.email = ADD_ADDRESS.EMAIL_REQUIRED_MESSAGE;
        else if (!validEmailRegex.test(value)) errors.email = ADD_ADDRESS.EMAIL_VALIDATION_MESSAGE;
        else errors.email = '';
        setEmail(value);
        break;

      case 'mobile':
        if (value.length === 0) errors.mobile = ADD_ADDRESS.MOBILE_VALIDATION_MESSAGE;
        else errors.mobile = '';
        setMobile(value);
        break;

      case 'addressLine1':
        if (value.length === 0) errors.addressLine1 = ADD_ADDRESS.ADDRESS_LINE_1_VALIDATION_MESSAGE;
        else errors.addressLine1 = '';
        setAddressLine1(value);
        break;

      case 'addressLine2':
        if (value.length === 0) errors.addressLine2 = ADD_ADDRESS.ADDRESS_LINE_2_VALIDATION_MESSAGE;
        else errors.addressLine2 = '';
        setAddressLine2(value);
        break;

      case 'pincode':
        if (value.length === 0) errors.pincode = ADD_ADDRESS.PINCODE_VALIDATION_MESSAGE;
        else errors.pincode = '';
        setPincode(value);
        break;
    }

    setErrors(errors);
  };

  const handleFormSubmit = () => {
    const addressObj: any = {
      firstName,
      lastName,
      email,
      mobile,
      addressLine1,
      addressLine2,
      state,
      pincode,
    };

    const errorsObj: any = { ...errors };

    // Validation 1
    let valid = true;
    Object.keys(addressObj).forEach((key: string) => {
      if (addressObj[key].length === 0) {
        valid = false;
        errorsObj[key] = ADD_ADDRESS.REQUIRED_VALIDATION_MESSAGE;
      }
    });

    if (!valid) {
      setErrors(errorsObj);
      return;
    }

    // Validation 2
    Object.values(addressObj).forEach((value: any) => value.length > 0 && (valid = false));
    let address: IAddress = new Address();
    address = { ...address, ...addressObj };
    addAddress(address);
    showToast(ADD_ADDRESS.ADDRESS_ADDED_MESSAGE);
    history.push(ROUTES.SELECT_ADDRESS);
  };

  return (
    <div className='add-address'>
      <h2 className='add-address-title'>{ADD_ADDRESS.SCREEN_TITLE}</h2>
      <div className='add-address-form d-flex'>
        <div className='add-address-form-section-left'>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.FIRST_NAME_LABEL} <span className='mandatory'>*</span>
            </label>
            <input
              value={firstName}
              onChange={handleFormChange}
              name='firstName'
              type='text'
              className='input-control'
            />
            {errors.firstName.length > 0 && <span className='error'>{errors.firstName}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.LAST_NAME_LABEL} <span className='mandatory'>*</span>
            </label>
            <input
              value={lastName}
              onChange={handleFormChange}
              name='lastName'
              type='text'
              className='input-control'
            />
            {errors.lastName.length > 0 && <span className='error'>{errors.lastName}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.EMAIL_LABEL} <span className='mandatory'>*</span>
            </label>
            <input
              value={email}
              onChange={handleFormChange}
              name='email'
              type='text'
              className='input-control'
            />
            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.MOBILE_LABEL} <span className='mandatory'>*</span>
            </label>
            <input
              value={mobile}
              onChange={handleFormChange}
              name='mobile'
              type='text'
              className='input-control'
            />
            {errors.mobile.length > 0 && <span className='error'>{errors.mobile}</span>}
          </FormGroup>
        </div>
        <div className='add-address-form-section-right'>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.ADDRESS_LINE_1_LABEL} <span className='mandatory'>*</span>
            </label>
            <input
              value={addressLine1}
              onChange={handleFormChange}
              name='addressLine1'
              type='text'
              className='input-control'
            />
            {errors.addressLine1.length > 0 && <span className='error'>{errors.addressLine1}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.ADDRESS_LINE_2_LABEL}
            </label>
            <input
              value={addressLine2}
              onChange={handleFormChange}
              name='addressLine2'
              type='text'
              className='input-control'
            />
            {errors.addressLine2.length > 0 && <span className='error'>{errors.addressLine2}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.STATE_LABEL} <span className='mandatory'>*</span>
            </label>
            <Dropdown options={states} value={state} onChange={setState} />
            {errors.state.length > 0 && <span className='error'>{errors.state}</span>}
          </FormGroup>
          <FormGroup>
            <label htmlFor='' className='input-label'>
              {ADD_ADDRESS.PINCODE_LABEL} <span className='mandatory'>*</span>
            </label>
            <input
              value={pincode}
              onChange={handleFormChange}
              name='pincode'
              type='text'
              className='input-control'
            />
            {errors.pincode.length > 0 && <span className='error'>{errors.pincode}</span>}
          </FormGroup>
        </div>
      </div>
      <button className='btn add-address-action' onClick={handleFormSubmit}>
        {ADD_ADDRESS.ACTION_BUTTON_TEXT}
      </button>
    </div>
  );
});
