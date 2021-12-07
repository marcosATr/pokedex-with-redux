import toggleDropdown from "./toggleDropdown.js";
import { combineReducers } from "redux";

//é preciso criar múltiplas instancias do mesmo redutor usando namespaces distintos
const RootReducers = combineReducers({
  toggleDropdownType: toggleDropdown('toggleDropdownType'),
  toggleDropdownGeneration: toggleDropdown('toggleDropdownGeneration'),
});

export default RootReducers;
