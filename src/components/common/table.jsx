import React from "react";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

function table({ columns, onSort, sortColumn, movies }) {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={movies} columns={columns} />
    </table>
  );
}

export default table;
