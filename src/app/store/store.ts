import { orderSlice } from "@/entities/order-item/model/order.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "shop",
  storage,
  whiteList: ["order"],
};

const isClient = typeof window !== "undefined";

const rootReducer = combineReducers({
  cart: orderSlice.reducer,
});

let mainReducer = rootReducer;

if (isClient) {
  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage");

  mainReducer = persistReducer(persistConfig, rootReducer);
}

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof mainReducer>;
