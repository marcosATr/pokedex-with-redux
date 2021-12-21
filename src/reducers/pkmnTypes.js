const storePkmnDataReducer = (state= [], action) => {
  if (action.type === 'STORE_PKMN_DATA') return [...state, ...action.payload];
  else return false;
};

export default storePkmnDataReducer;
