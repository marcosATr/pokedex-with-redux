const toggleDropdown = (state = false, action) => {
  if (action.type === "OPEN_DROPDOWN") return state = true;
  if (action.type === "CLOSE_DROPDOWN") return state = false;
};

export default toggleDropdown;