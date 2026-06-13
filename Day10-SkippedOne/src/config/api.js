import axios from "axios";
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=2c34857ff3294be897465f8a4ec024e9
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 10000,
});

export default api;
