import toggleDropdown from "./toggleDropdown.js";
import { combineReducers } from "redux";

const RootReducers = combineReducers({
  toggleDropdown: toggleDropdown,
});

export default RootReducers;
