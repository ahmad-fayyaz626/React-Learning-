import axios from "axios";

const instance = axios.create({
  baseURL: "https://6a315dff7bc5e1c612659f36.mockapi.io",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
