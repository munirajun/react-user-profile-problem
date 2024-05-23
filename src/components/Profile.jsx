import React, { useContext } from "react";

import { UserProfileContext } from "../contexts/UserProfileContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { state } = useContext(UserProfileContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-3">
        <h4 className="h4">Profile</h4>
      </div>
      <div className="card">
        <img
          src={state.profileImage.url}
          className="card-img-top"
          alt={state.profileImage.description}
        />
        <div className="card-body">
          <p className="card-text">
            <b>Name: {state.name}</b>{" "}
          </p>
          <p className="card-text">
            <b>Surname: {state.surname}</b>{" "}
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Update Profile Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
