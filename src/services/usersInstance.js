import axios from "axios";

export const usersInstance = axios.create({
  baseURL: "https://reqres.in/api/",

});