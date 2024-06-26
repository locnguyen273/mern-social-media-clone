import axios from "axios";
import { BASE_URL } from './config';

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`${BASE_URL}/api/${url}`, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`/api/${url}`, post, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`/api/${url}`, post, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`/api/${url}`, post, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};
