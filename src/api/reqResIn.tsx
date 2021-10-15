import axios from "axios";

export const reqResIn = axios.create({
  baseURL: "https://reqres.in/api",
});
