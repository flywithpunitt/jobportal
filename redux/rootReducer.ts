import { combineReducers } from "redux";
import userReducer from "./slice/user";
import { baseApi } from "../services/base";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage: storage, // Use localStorage
};

const rootReducer = combineReducers({
  user: userReducer,

  [baseApi.reducerPath]: baseApi.reducer,
});

export { rootPersistConfig, rootReducer };
