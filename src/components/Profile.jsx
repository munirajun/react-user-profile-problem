import React, { useContext } from "react";

import { UserProfileContext } from "../contexts/UserProfileContext";

const Profile = () => {
  const { state } = useContext(UserProfileContext);
  return (
    <div>
      <div>
        <span>Name: {state.name}</span>
      </div>
      <div>
        <span>Surname: {state.surname}</span>
      </div>
      <div>
        <img
          src={state.profileImage.url}
          alt={state.profileImage.description}
        />
      </div>
    </div>
  );
};

export default Profile;
