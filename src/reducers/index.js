import {combineReducers} from "redux";
import autoListReducer from "./auto-list";
import autoItemReducer from "./auto-item";
import cartReducer from "./cart";
import serviceReducer from "./service";

export default combineReducers({
    autoListReducer,
    autoItemReducer,
    cartReducer,
    serviceReducer
})