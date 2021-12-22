import { combineReducers } from "redux";
import { baseApi } from "services/index.services";
import settingsReducer from "redux/slices/settings.slice";

const rootReducer = combineReducers({
  settings: settingsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
