export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "UPDATE_PROFILE":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
