import {combineReducers, legacy_createStore} from "redux";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
form:formReducer
});
export let store = legacy_createStore(reducers);

