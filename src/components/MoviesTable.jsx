import React, { useState } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";
import paginate from "../utils/paginate";
import Like from "./common/like";
import Pagination from "./common/pagination";

function Table() {
  const [movies, setMovies] = useState(getMovies);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

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

  const itemCount = movies.length;
  if (itemCount == 0) <h2>No movies remain</h2>;

  const clonedMovies = paginate(movies, pageSize, currentPage);

  return (
    <div>
      <h6>Showing {itemCount} movies in the database</h6>
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
                <Like click={() => handleLike(movie)} handleLike={movie.like} />
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
      <Pagination
        itemsCount={itemCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Table;