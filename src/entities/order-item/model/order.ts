import { IOrderItem } from "@/shared/types/orderItem";

export interface IOrderInitialState {
  items: IOrderItem[];
}

export interface IAddToCartPayload extends Omit<IOrderItem, "id"> {}

export interface IChangeQuantityPayload extends Pick<IOrderItem, "id"> {
  type: "minus" | "plus";
}
