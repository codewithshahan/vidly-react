import _ from "lodash";

function paginate(items, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export default paginate;
