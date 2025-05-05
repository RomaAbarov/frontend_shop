import { IOrder } from "./order";
import { IProduct } from "./product";

export interface IUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  favorites: IProduct[];
  orders: IOrder[];
}
