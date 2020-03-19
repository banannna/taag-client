const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const SERVER_IP = process.env.REACT_APP_SERVER_IP;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const SERVER_URL = `${PROTOCOL}${SERVER_IP}:${SERVER_PORT}`;

const AUTH_URL = "/api/auth";

const NOT_FOUND_URL = "/page-not-found";
const DEFAULT_NOT_AUTHED_URL = "/home";
const SIGNOUT_URL = "/home";

export {
  CLIENT_ID,
  SERVER_URL,
  AUTH_URL,
  NOT_FOUND_URL,
  DEFAULT_NOT_AUTHED_URL,
  SIGNOUT_URL
};
