import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://techai-h3ri.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
