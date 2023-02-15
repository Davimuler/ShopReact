import {combineReducers, legacy_createStore} from "redux";
import {reducer as formReducer} from "redux-form"
import HeaderReducer from "./HeaderReducer";
import UserReducer from "./UserReducer";
import itemsReducer from "./ItemsReducer";

let reducers = combineReducers({
    form: formReducer,
    Header: HeaderReducer,
    Users: UserReducer,
    Items:itemsReducer
});
export let store = legacy_createStore(reducers);

