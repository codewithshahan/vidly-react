import http from "./httpService";
import config from "../config.json";

const api = `${config.api}/users`;

export function register(user) {
  return http.post(api, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export default {
  register,
};
