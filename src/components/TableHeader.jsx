import React from "react";

function TableHeader(props) {
  const { onSort, sortColumn, columns } = props;

  const raiseSort = (path) => {
    const clonedSort = { ...sortColumn };
    if (clonedSort.path === path) {
      clonedSort.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      clonedSort.path = path;
      clonedSort.order = "asc";
    }
    onSort(clonedSort);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr className="clickable">
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
