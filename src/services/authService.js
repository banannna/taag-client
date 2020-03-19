import { SIGNOUT_URL } from "../config";


const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const setToken = token => {
  localStorage.setItem("jwtToken", token);
};

const signOut = () => {
  localStorage.removeItem("jwtToken");
  window.location.href = SIGNOUT_URL;
};

export { getToken, setToken, signOut };
