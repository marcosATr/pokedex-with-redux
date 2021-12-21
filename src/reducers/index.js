import { combineReducers } from "redux";
import toggleDropdown from "./toggleDropdown.js";
import storePkmnDataReducer from "./pkmnTypes.js";

//é preciso criar múltiplas instancias do mesmo redutor usando namespaces distintos
const RootReducers = combineReducers({
  toggleDropdownType: toggleDropdown('toggleDropdownType'),
  toggleDropdownGeneration: toggleDropdown('toggleDropdownGeneration'),
  storePkmnDataReducer: storePkmnDataReducer
});

export default RootReducers;
