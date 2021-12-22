import React, { useState } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import paginate from "../utils/paginate";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { useMemo } from "react";

function Table() {
  const [movies, setMovies] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useMemo(() => {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    setMovies(getMovies);
    setGenres(genres);
  }, []);

  // const [movie, setMovie] = useState(getMovie);

  const handleDelete = (movie) =>
    setMovies(movies.filter((i) => i._id !== movie._id));

  const handleLike = (movie) => {
    const cloneMov = [...movies];
    const indexOfMovie = cloneMov.indexOf(movie);
    cloneMov[indexOfMovie] = { ...cloneMov[indexOfMovie] };
    cloneMov[indexOfMovie].like = !cloneMov[indexOfMovie].like;
    setMovies(cloneMov);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onItemSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const count = movies.length;
  if (count == 0) return <h2>No movies remain</h2>;

  const filltered =
    selectedGenre && selectedGenre._id
      ? movies.filter((movie) => movie.genre._id == selectedGenre._id)
      : movies;

  const clonedMovies = paginate(filltered, pageSize, currentPage);

  return (
    <div>
      <h6>Showing {filltered.length} movies in the database</h6>
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            onGenreSelect={onItemSelect}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col-lg">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {clonedMovies.map((movie) => (
                <tr key={movie._id}>
                  <th>{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      click={() => handleLike(movie)}
                      handleLike={movie.like}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(movie)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        itemsCount={filltered.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Table;
