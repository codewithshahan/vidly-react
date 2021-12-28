import React from "react";

function input({ name, label, error, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor="password">{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default input;