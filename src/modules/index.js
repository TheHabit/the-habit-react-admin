import { combineReducers } from "redux";
import userReducer from "./UserModule";
import navigateReducer from './NavigateParamModule';
import clubReducer from "./ClubModule";
import clubDetailReducer from "./ClubDetailModule";
import recordReducer from "./RecordModule";

const rootReducer = combineReducers({userReducer,navigateReducer,clubReducer,clubDetailReducer,recordReducer
});

export default rootReducer;