import { ICart } from "./iCart";

export interface IOrder {
  items: ICart[];
  price: number;
  date: string;
}
