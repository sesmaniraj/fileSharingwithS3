import axios from "axios";

export const getSignInUrl = async () => {
  try {
    const res = await axios.get("/api/image-url");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
