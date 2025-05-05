import { IOrderItem } from "./orderItem";
import { IUser } from "./user";

export enum EnumOrderStatus {
  PENDING = "Pending",
  PAYED = "Payed",
}

export interface IOrder {
  id: string;
  status: EnumOrderStatus;
  total: number;
  items: IOrderItem[];
  user: IUser;
  createdAt: string;
}

export interface IPaymentResponse {
  id: string;
  status: string;
  createdAt: Date;
}
