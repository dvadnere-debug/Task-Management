export const initialAuthState = {
    user: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };

    case "LOGOUT": {
      return { user: null };
    }

    case "UPDATE_PROFILE": {
      return { user: action.payload };
    }
  }
};
