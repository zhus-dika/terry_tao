import axios from "axios";

const token = localStorage.getItem("token");

if (!token) console.warn("Token not found")

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

export default requests;