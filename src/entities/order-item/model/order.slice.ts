import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddToCartPayload,
  IChangeQuantityPayload,
  IOrderInitialState,
} from "./order";

const initialState: IOrderInitialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<IAddToCartPayload>) => {
      const isExist = state.items.some(
        (item) => item.product.id === action.payload.product.id
      );

      if (!isExist)
        state.items.push({ ...action.payload, id: state.items.length });
    },
    removeFromOrder: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) type === "plus" ? item.quantity++ : item.quantity--;
    },
    reset: (state) => {
      state.items = [];
    },
  },
});
