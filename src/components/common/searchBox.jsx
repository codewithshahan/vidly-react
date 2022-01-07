<<<<<<< HEAD
import React from "react";

function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}

=======
import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChange, ...rest } = this.props;

    return (
      <input
        {...rest}
        style={{ marginBottom: 20 }}
        type="text"
        className="form-control"
        onChange={({ currentTarget }) => onChange(currentTarget.value)}
      />
    );
  }
}

SearchBox.defaultProps = {
  placeholder: "Search ...",
};

>>>>>>> ed90c22d2711cc8d56f55fce74cff95c3707415a
export default SearchBox;
