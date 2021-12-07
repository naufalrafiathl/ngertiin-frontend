import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import authReducer from "../modules/auth"
import materiReducer from "../modules/materi"
// import { reducer as toastrReducer } from "react-redux-toastr";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token", "refreshToken", "student"],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  materi: materiReducer,
});

export default rootReducer;
