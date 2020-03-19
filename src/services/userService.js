import axios from "axios";
import { SERVER_URL, AUTH_URL } from "../config";
import { setToken } from "./authService";

const userSignin = async (code, authProvider) => {
  try {
    const res = await axios.post(`${SERVER_URL}${AUTH_URL}/`, {
      code: code,
      authProvider: authProvider
    });
    setToken(res.data.token);
    return res.data;
  } catch (err) {
    console.log(`❗ ${err}`);
    return err;
  }
};

export { userSignin };
