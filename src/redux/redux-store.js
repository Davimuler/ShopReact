import {combineReducers, legacy_createStore} from "redux";
import HeaderReducer from "./HeaderReducer";
import UserReducer from "./UserReducer";
import itemsReducer from "./ItemsReducer";

let reducers = combineReducers({
    Header: HeaderReducer,
    Users: UserReducer,
    Items:itemsReducer
});
export let store = legacy_createStore(reducers);

