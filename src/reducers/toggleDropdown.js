const toggleDropdown = (namespace) => {
  return (state = false, action) => {
    if (action.type === `${namespace}/OPEN_DROPDOWN`) return (state = true);
    if (action.type === `${namespace}/CLOSE_DROPDOWN`) return (state = false);
    else return state;
  };
};

export default toggleDropdown;
