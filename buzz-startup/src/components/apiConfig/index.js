import axios from "axios"

// const token = JSON.parse(localStorage.getItem("token"))

const api = axios.create({
    baseURL:'https://buzz-startups-backend.vercel.app/api/v1',
    // baseURL: "http://localhost:8000/api/v1",
    // headers: { Authorization: `Bearer ${token}` },
  });

  api.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;