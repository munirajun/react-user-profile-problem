import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchImage } from "../api/unsplash";
import { UserProfileContext } from "../contexts/UserProfileContext";

const UpdateProfileImage = () => {
  const { state, dispatch } = useContext(UserProfileContext);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [, setError] = useState(null);
  const [rejectCount, setRejectCount] = useState(0);
  const topic = state.topic === "Other" ? state.otherTopic : state.topic;

  const acceptHandler = () => {
    dispatch({
      type: "UPDATE_PROFILE_IMAGE",
      data: {
        profileImage: { url: image.urls.small, description: image.description },
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
      <div className="mb-3">
        <h4 className="h4">Pick Profile Image</h4>
      </div>
      <div>
        {!loading && image && (
          <figure className="figure">
            <img
              className="figure-img image-fluid rounded"
              src={image.urls.small}
              alt={image.urls.small}
            />
            <figcaption class="figure-caption">{image.description}</figcaption>
          </figure>
        )}
      </div>
      <div className="m-2">
        <button
          className="btn btn-primary m-2"
          type="button"
          onClick={acceptHandler}
        >
          Accept
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={() => setRejectCount(rejectCount + 1)}
        >
          Reject
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
