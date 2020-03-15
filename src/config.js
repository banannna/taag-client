const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const PROTOCOL = process.env.REACT_APP_PROTOCOL;
const SERVER_IP = process.env.REACT_APP_SERVER_IP;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const SERVER_URL = `${PROTOCOL}${SERVER_IP}:${SERVER_PORT}`;

const AUTH_URL = '/api/auth'

export { CLIENT_ID, SERVER_URL, AUTH_URL };
