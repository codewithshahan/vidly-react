import http from "./httpService";
import config from "../config.json";

const movies = http.get(`${config.api}/movies`);

function movieUrl(id) {
  return `${config.api}/${id}`;
}

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(config.api, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
