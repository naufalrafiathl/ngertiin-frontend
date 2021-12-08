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
    whitelist: ["token", "refreshToken", "student", "pengajar_id", "isPengajar"],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  jurusan: materiReducer,
});

export default rootReducer;
