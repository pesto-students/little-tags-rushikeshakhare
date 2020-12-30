import { IAbstractEntity } from "./abstractEntity";
// import uuid from "uuid";

export interface IAddress extends IAbstractEntity {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    pincode: number | string;
    isDefault: boolean;
}

export class Address implements IAddress {
    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public mobile: string;
    public addressLine1: string;
    public addressLine2: string;
    public state: string;
    public pincode: number | string;
    public isDefault: boolean;

    constructor() {
        this.id = Date.now().toString();  // Replace this with UUID V4 // uuid.v4()
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.mobile = '';
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.state = '';
        this.pincode = '';
        this.isDefault = false;
    }
}