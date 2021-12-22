const toggleDropdown = (namespace) => {
  return (state = false, action) => {
    if (action.type === `${namespace}/OPEN_DROPDOWN`) return true;
    if (action.type === `${namespace}/CLOSE_DROPDOWN`) return false;
    else return state;
  };
};


// const toggleDropdown = (namespace) => {
//   return (state, action) => {
//     if (action.type === `${namespace}/OPEN_DROPDOWN`) return {...state, [namespace]: true};
//     if (action.type === `${namespace}/CLOSE_DROPDOWN`) return {...state, [namespace]: false};
//     else return {...state, [namespace]: false};
//   };
// };

export default toggleDropdown;
