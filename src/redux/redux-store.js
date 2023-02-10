import {combineReducers, legacy_createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import HeaderReducer from "./HeaderReducer";
import UserReducer from "./UserReducer";

let reducers = combineReducers({
form:formReducer,
    Header: HeaderReducer,
   Users:UserReducer
});
export let store = legacy_createStore(reducers);

