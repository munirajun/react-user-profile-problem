import React, { createContext, useReducer } from "react";

const initialState = {
  name: "",
  surname: "",
  topic: "",
  otherTopic: "",
  profileImage: { url: null, description: "" },
};

const userProfileReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE_INFO":
      return {
        ...state,
        ...action.data,
      };
    case "UPDATE_PROFILE_IMAGE":
      return { ...state, profileImage: action.data.profileImage };
    default:
      return state;
  }
};

const UserProfileContext = createContext();

const UserProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userProfileReducer, initialState);

  return (
    <UserProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { initialState, UserProfileContextProvider, UserProfileContext };
