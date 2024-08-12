import axios from "axios";

let baseURL: string;

switch (__APP_ENV__) {
  case "production":
    baseURL = `https://${__PROD_BASE_URL__}/api`;
    break;
  case "development":
  case "preview":
    baseURL = `https://${__DEV_BASE_URL__}/api/development`;
    break;
  default:
    baseURL = `${__BASE_URL__}/api/local`;
}

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
