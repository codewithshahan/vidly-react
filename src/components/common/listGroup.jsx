import React from "react";

function listGroup({
  genres,
  onGenreSelect,
  textProp,
  selectedGenre,
  valueProp,
}) {
  return (
    <div>
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre[valueProp]}
            onClick={() => onGenreSelect(genre)}
            className={
              genre === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre[textProp]}
          </li>
        ))}
      </ul>
    </div>
  );
}

listGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id",
};

export default listGroup;
