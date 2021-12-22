import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

function pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  console.log(currentPage);
  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page == currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default pagination;
