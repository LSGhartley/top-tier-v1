import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3000,
  headers: { "Access-Control-Allow-Origin": "*" },
});
