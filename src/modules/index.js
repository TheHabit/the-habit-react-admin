import { combineReducers } from "redux";
import userReducer from "./UserModule";
import navigateReducer from './NavigateParamModule';


const rootReducer = combineReducers({userReducer,navigateReducer
   
});

export default rootReducer;