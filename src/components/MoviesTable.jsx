import React from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

function MoviesTable(props) {
  const { movies, onLike, OnDelete, onSort, sortColumn } = props;

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like click={() => onLike(movie)} handleLike={movie.like} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button onClick={() => OnDelete(movie)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      <Table
        onSort={onSort}
        columns={columns}
        movies={movies}
        sortColumn={sortColumn}
      />
    </div>
  );
}

export default MoviesTable;
