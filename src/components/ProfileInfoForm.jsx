import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserProfileContext } from "../contexts/UserProfileContext";

export const ProfileInfoForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [topic, setTopic] = useState("");
  const [otherTopic, setOtherTopic] = useState("");
  const { dispatch } = useContext(UserProfileContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_PROFILE_INFO",
      data: { name, surname, topic, otherTopic },
    });
    navigate("/update-profile-image");
  };

  const topicOptions = [
    { name: "Choose Topic", value: "" },
    { name: "Travel", value: "Travel" },
    { name: "Cars", value: "Cars" },
    { name: "Wildlife", value: "Wildlife" },
    { name: "Technology", value: "Technology" },
    { name: "Other", value: "Other" },
  ];

  return (
    <div>
      <div className="mb-3">
        <h4 className="h4">Update Profile Info</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" label="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" label="surname" className="form-label">
            Surname
          </label>
          <input
            className="form-control"
            type="text"
            name="surname"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="topic" label="topic" className="form-label">
            Topic
          </label>
          <select
            className="form-control"
            name="topic"
            label="topic"
            id="topic"
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            {topicOptions.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.name}
              </option>
            ))}
          </select>
        </div>
        {topic === "Other" && (
          <div className="mb-3">
            <label
              htmlFor="otherTopic"
              label="otherTopic"
              className="form-label"
            >
              Other Topic
            </label>
            <input
              className="form-control"
              type="text"
              name="otherTopic"
              id="otherTopic"
              value={otherTopic}
              onChange={(e) => setOtherTopic(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
