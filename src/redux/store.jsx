import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({});

// const persistedReducer = persistReducer(persistConfig, reducers);
// export const store = configureStore({
//   reducer: persistedReducer,
// });

export const store = configureStore({
  reducer: {},
});
