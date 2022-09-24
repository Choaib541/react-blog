import axios from "axios";
import { API_URL } from "./API_DATA";

const headers = {
  Accept: "application/json",
};

if (localStorage["token"]) {
  headers.Authorization = `Bearer ${localStorage["token"]}`;
}

export const api = axios.create({
  baseURL: API_URL,
  headers: headers,
});
