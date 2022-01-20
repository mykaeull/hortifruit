import axios from "axios";

// https://cors-anywhere.herokuapp.com/

export const api = axios.create({
  baseURL: "https://www.fruityvice.com/api/",
});
