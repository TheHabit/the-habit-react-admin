import { combineReducers } from "redux";
import userReducer from "./UserModule";
import navigateReducer from './NavigateParamModule';
import clubReducer from "./ClubModule";
import clubDetailReducer from "./ClubDetailModule";

const rootReducer = combineReducers({userReducer,navigateReducer,clubReducer,clubDetailReducer
});

export default rootReducer;