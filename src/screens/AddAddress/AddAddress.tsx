import * as React from "react";
import { FormGroup, Dropdown } from "../../components";
import { states } from "../../mockData";
import { withContainer } from "../../hocs/withContainer";
import { useState } from "react";
import { connect } from "../../store";
import "./addAddress.scss";
import { Address, IAddress } from "../../models/address";
import { useAddress } from "../../hooks/useAddress";
import { validEmailRegex } from "../../utilities";

interface IAddAddressProps {
  history: any;
}

export const AddAddress = connect()(
  withContainer(({ history }: IAddAddressProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [state, setState] = useState("Maharashtra");
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
          if (value.length === 0) errors.firstName = 'First name is required';
          else errors.firstName = '';
          setFirstName(value);
          break;

        case 'lastName':
          if (value.length === 0) errors.lastName = 'Last name is required';
          else errors.lastName = '';
          setLastName(value);
          break;

        case 'email':
          if (value.length === 0) errors.email = 'Email is required';
          else if(!validEmailRegex.test(value)) errors.email = 'Email is not valid';
          else errors.email = '';
          setEmail(value);
          break;

        case 'mobile':
          if (value.length === 0) errors.mobile = 'Mobile is required';
          else errors.mobile = '';
          setMobile(value);
          break;

        case 'addressLine1':
          if (value.length === 0) errors.addressLine1 = 'Address Line 1 is required';
          else errors.addressLine1 = '';
          setAddressLine1(value);
          break;

        case 'addressLine2':
          if (value.length === 0) errors.addressLine2 = 'Address Line 2 is required';
          else errors.addressLine2 = '';
          setAddressLine2(value);
          break;
        
        case 'pincode':
          if (value.length === 0) errors.pincode = 'Pincode is required';
          else errors.pincode = '';
          setPincode(value);
          break;
      }

      setErrors(errors);

    }

    const handleFormSubmit = () => {

      
      const addressObj: any = { firstName, lastName, email, mobile, addressLine1, addressLine2, state, pincode };

      const errorsObj: any = { ... errors };

      // Validation 1
      let valid = true;
      Object.keys(addressObj).forEach((key: string) => {
        if (addressObj[key].length === 0 ) {
          valid = false;
          errorsObj[key] = 'Required';
        };
      });

      if (!valid) {
        setErrors(errorsObj);
        return;
      }

      // Validation 2
      Object.values(addressObj).forEach((value: any) => value.length > 0 && (valid = false));

      let address: IAddress = new Address();
      address = { ...address, ...addressObj };

    
      console.log(address);
      addAddress(address);
      // history.push("/select-address")
    }
    return (
      <div className="add-address">
        <h2 className="add-address-title">Delivering To</h2>
        <div className="add-address-form d-flex">
          <div className="add-address-form-section-left">
            <FormGroup>
              <label htmlFor="" className="input-label">
                First Name
              </label>
              <input value={ firstName } onChange={ handleFormChange } name="firstName" type="text" className="input-control" />
              {
                errors.firstName.length > 0 &&
                <span className="error">{errors.firstName}</span>
              }
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Last Name
              </label>
              <input value={ lastName } onChange={ handleFormChange } name="lastName" type="text" className="input-control" />
              {
                errors.lastName.length > 0 &&
                <span className="error">{errors.lastName}</span>
              }
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Email ID
              </label>
              <input value={ email } onChange={ handleFormChange } name="email" type="text" className="input-control" />
              {
                errors.email.length > 0 &&
                <span className="error">{errors.email}</span>
              }
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Phone Number
              </label>
              <input value={ mobile } onChange={ handleFormChange } name="mobile" type="text" className="input-control" />
              {
                errors.mobile.length > 0 &&
                <span className="error">{errors.mobile}</span>
              }
            </FormGroup>
          </div>
          <div className="add-address-form-section-right">
            <FormGroup>
              <label htmlFor="" className="input-label">
                Address Line 1
              </label>
              <input value={ addressLine1 } onChange={ handleFormChange } name="addressLine1" type="text" className="input-control" />
              {
                errors.addressLine1.length > 0 &&
                <span className="error">{errors.addressLine1}</span>
              }
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Address Line 2
              </label>
              <input value={ addressLine2 } onChange={ handleFormChange } name="addressLine2" type="text" className="input-control" />
              {
                errors.addressLine2.length > 0 &&
                <span className="error">{errors.addressLine2}</span>
              }
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                State
              </label>
              <Dropdown options={states} value={state} onChange={setState} />
              {
                errors.state.length > 0 &&
                <span className="error">{errors.state}</span>
              }
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Pin Code
              </label>
              <input value={ pincode } onChange={ handleFormChange } name="pincode" type="text" className="input-control" />
              {
                errors.pincode.length > 0 &&
                <span className="error">{errors.pincode}</span>
              }
            </FormGroup>
          </div>
        </div>
        <button
          className="btn add-address-action"
          onClick={handleFormSubmit}
        >
          Add Information
        </button>
      </div>
    );
  })
);
