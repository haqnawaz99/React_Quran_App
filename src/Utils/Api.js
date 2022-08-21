import axios from "axios";

import { API_BASE_URL } from "./Url";
export const Api = async (method, route, data) => {
  const promise = axios({
    method: method,
    url: `${API_BASE_URL}/${route}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      // ...data.getHeaders(),
    },
    data: data,
  });

  const response = await promise
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err.response;
    });

  return response;
};
