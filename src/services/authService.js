import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const api = `${config.api}/auth`;

export async function login(email, password) {
  const { data: jwt } = await http.post(api, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function getWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function removeJwt() {
  localStorage.removeItem("token");
}

export function setJwt() {
  localStorage.setItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (error) {
    return null;
  }
}

export default {
  login,
  removeJwt,
  setJwt,
  getCurrentUser,
};
