import axios from "axios";

export const fetchImage = async (topic) => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: { query: topic, orientation: "landscape" },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
