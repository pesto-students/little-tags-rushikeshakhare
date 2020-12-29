import * as React from "react";
import { FormGroup, Dropdown } from "../../components";
import { states } from "../../mockData";
import { withContainer } from "../../hocs/withContainer";
import { useState } from "react";
import { connect } from "../../store";
import "./addAddress.scss";

interface IAddAddressProps {
  history: any;
}

export const AddAddress = connect()(
  withContainer(({ history }: IAddAddressProps) => {
    const [state, setState] = useState("Maharashtra");

    return (
      <div className="add-address">
        <h2 className="add-address-title">Delivering To</h2>
        <div className="add-address-form d-flex">
          <div className="add-address-form-section-left">
            <FormGroup>
              <label htmlFor="" className="input-label">
                First Name
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Last Name
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Email ID
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Phone Number
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
          </div>
          <div className="add-address-form-section-right">
            <FormGroup>
              <label htmlFor="" className="input-label">
                Address Line 1
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Address Line 2
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                State
              </label>
              <Dropdown options={states} value={state} onChange={setState} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="" className="input-label">
                Pin Code
              </label>
              <input type="text" className="input-control" />
            </FormGroup>
          </div>
        </div>
        <button
          className="btn add-address-action"
          onClick={() => history.push("/select-address")}
        >
          Add Informations
        </button>
      </div>
    );
  })
);
