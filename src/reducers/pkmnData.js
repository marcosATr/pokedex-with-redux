const initialState = {
  pkmnData: {
    pkmnType: [],
    pkmnList: [],
    selectedPkmn: [],
  },
};

const storePkmnDataReducer = (state = initialState, action) => {
  if (action.type === "STORE_PKMN_DATA") return { ...state, pkmnData: {...action.payload} };
  else return false;
};

export default storePkmnDataReducer;
