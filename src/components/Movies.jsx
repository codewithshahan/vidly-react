import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import paginate from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { useMemo } from "react";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

function Movies() {
  const pageSize = 4;
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  useMemo(() => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    setMovies(getMovies);
    setGenres(genres);
  }, []);

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

  const handleSort = (newSort) => {
    setSortColumn(newSort);
  };

  const getPageData = () => {
    const filltered =
      selectedGenre && selectedGenre._id
        ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(filltered, [sortColumn.path], [sortColumn.order]);

    const clonedMovies = paginate(sorted, pageSize, currentPage);

    return { totalCount: filltered.length, data: clonedMovies };
  };

  const count = movies.length;
  if (count === 0) return <h2>No movies remain</h2>;

  const { totalCount, data: clonedMovies } = getPageData();

  return (
    <div>
      <h6>Showing {totalCount} movies in the database</h6>
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            onGenreSelect={onItemSelect}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col-lg">
          <MoviesTable
            movies={clonedMovies}
            onLike={handleLike}
            OnDelete={handleDelete}
            onSort={handleSort}
            sortColumn={sortColumn}
          />
        </div>
      </div>

      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Movies;