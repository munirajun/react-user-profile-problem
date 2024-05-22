import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchImage } from "../api/unsplash";
import { UserProfileContext } from "../contexts/UserProfileContext";

const UpdateProfileImage = () => {
  const { state, dispatch } = useContext(UserProfileContext);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [rejectCount, setRejectCount] = useState(0);
  const topic = state.otherTopic || state.topic;

  const acceptHandler = () => {
    dispatch({
      type: "UPDATE_PROFILE_IMAGE",
      data: {
        profileImage: { url: image.urls.thumb, description: image.description },
      },
    });
    navigate("/profile");
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const image = await fetchImage(topic);
        setImage(image);
      } catch (e) {
        setError({ message: "Failed to fetch Image", error: e });
        console.log("Failed to fetch image");
      } finally {
        setLoading(false);
      }
    })();
  }, [topic, rejectCount]);

  return (
    <div>
      <div>
        {!loading && image && (
          <img src={image.urls.small} alt={image.urls.small} />
        )}
      </div>
      <div>
        <button type="button" onClick={acceptHandler}>
          Accept
        </button>
        <button type="button" onClick={() => setRejectCount(rejectCount + 1)}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
