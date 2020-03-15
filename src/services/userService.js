import axios from "axios";
import { SERVER_URL, AUTH_URL } from "../config";

function userSignin(code) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${SERVER_URL}${AUTH_URL}/`, { code: code, authProvider: "github" })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject("Error");
      });
  });
}

export { userSignin };
