const initialState = {
  usuarios: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALL_USERS":
      return { ...state, usuarios: action.todosLosUsuarios };
    default:
      return state;
  }
};
