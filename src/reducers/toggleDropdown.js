const toggleDropdown = (state=false, action) => {
  if (action.type === "OPEN_DROPDOWN") return state = true;
  if (action.type === "CLOSE_DROPDOWN") return state = false;
  else return state;
};

export default toggleDropdown;