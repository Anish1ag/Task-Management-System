import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";
import Cookies from "js-cookie";
async function RenameTask(data) {
  const token = Cookies.get("token");
  try {
    const res = await axios({
      method: "put",
      url: `${API_BASE_URL}api/v1/taskstage/${data.id}/`,
      data: data.data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (err) {
    if (err.res) {
      return Promise.reject(err.res.data);
    } else {
      return Promise.reject(err.message);
    }
  }
}

export { RenameTask };
