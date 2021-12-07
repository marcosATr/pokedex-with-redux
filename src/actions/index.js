export const openDropDown = (namespace) => {
  return {
    type: `${namespace}/OPEN_DROPDOWN`
  }
}

export const closeDropDown = (namespace) => {
  return {
    type: `${namespace}/CLOSE_DROPDOWN`
  }
}