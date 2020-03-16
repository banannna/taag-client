import { getToken } from "../../services/authService";
import history from "../../Utils/history";
import { DEFAULT_NOT_AUTHED_URL } from "../../config";

export default function RouteProtector({ component, fallback, isGuarded }) {
  if (!isGuarded || getToken() != null) {
    return component;
  } else {
    history.push(fallback || DEFAULT_NOT_AUTHED_URL);
    return null;
  }
}
