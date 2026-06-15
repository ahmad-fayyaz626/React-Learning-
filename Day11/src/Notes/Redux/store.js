import { createStore } from "redux";
import AddtoCart from "../Reducers/AddtoCart";
import { persistStore, persistReducer } from "redux-persist";
import storageEngine from "redux-persist/lib/storage";

const storage = storageEngine.default || storageEngine;

console.log(storage);

import { combineReducers } from "redux";
const persistConfig = {
  key: "Cart",
  storage,
};

const rootReducer = AddtoCart;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
