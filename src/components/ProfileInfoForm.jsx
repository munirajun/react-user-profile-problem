import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserProfileContext } from "../contexts/UserProfileContext";
import "./ProfileInfoForm.css";

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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" label="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname" label="surname">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic" label="topic">
            Topic
          </label>
          <select
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
          <div className="form-group">
            <label htmlFor="otherTopic" label="otherTopic">
              Other Topic
            </label>
            <input
              type="text"
              name="otherTopic"
              id="otherTopic"
              value={otherTopic}
              onChange={(e) => setOtherTopic(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
