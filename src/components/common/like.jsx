import React from "react";

function Like({ handleLike, click }) {
  let classes = "fa fa-heart";
  if (!handleLike) classes += "-o";
  return (
    <i
      onClick={click}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
}

export default Like;
