import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";
import Cookies from "js-cookie";

async function registerComment(data) {
  const token = Cookies.get("token");
  try {
    const response = await axios({
      method: "post",
      url: `${API_BASE_URL}task/comments`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response.data.detail);
    } else return Promise.reject(err.message);
  }
}
export { registerComment };
