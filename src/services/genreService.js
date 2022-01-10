import http from "./httpService";
import config from "../config.json";

export const genres = http.get(`${config.api}/genres`);

export function getGenres() {
  return genres;
}
