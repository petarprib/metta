import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "services/index.services";
import rootReducer from "redux/root-reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
