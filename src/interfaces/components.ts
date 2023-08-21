import { IRegData } from "./IRegData";
import { IProduct } from "./Shop";

export interface IRegAuthForm {
  func: Function;
  changeUser: Function;
  authUserData: IRegData;
}
export interface ICatalogueItem {
  product: IProduct;
}
export interface ICatalogueFilter {
  currCategory: string;
  changeCategory: Function;
}
export interface ILoginLink {
  title: string;
}
