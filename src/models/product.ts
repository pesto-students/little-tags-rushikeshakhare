import { IAbstractEntity } from "./abstractEntity";

export interface IProduct extends IAbstractEntity {
    name: string;
    price: number;
    display_price: string;
    discount_percent?: number;
    available: number;
    quantity: number;
}