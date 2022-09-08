import axios from "axios";

const headers = {
  Accept: "application/json",
};

if (localStorage["token"]) {
  headers.Authorization = `Bearer ${localStorage["token"]}`;
}

export const api = axios.create({
  baseURL: "http://localhost/api",
  headers: headers,
});
