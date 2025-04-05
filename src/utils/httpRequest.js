import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    // "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const request = async (method, url, data, config) => {
  try {
    const res = await httpRequest({ method, url, data, ...config });
    return res.data;
  } catch (error) {
    console.error(error);
    return error.response?.data;
  }
};

export const get = async (url, config) => request("GET", url, null, config);
export const post = async (url, data, config) =>
  request("POST", url, data, config);
export const put = async (url, data, config) =>
  request("PUT", url, data, config);
export const patch = async (url, data, config) =>
  request("PATCH", url, data, config);
export const del = async (url, config) => request("DELETE", url, null, config);

export const setToken = (token) => {
  localStorage.setItem("token", token);
  httpRequest.defaults.headers.Authorization = `Bearer ${token}`;
};

export default {
  get,
  post,
  put,
  patch,
  del,
  setToken,
};
