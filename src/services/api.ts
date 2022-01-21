import axios from "axios";

// https://cors-anywhere.herokuapp.com/

export const api = axios.create({
  baseURL: "https://www.fruityvice.com/api/",
  // headers: {
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   Accept: "application/json",
  // },
});
