import React, { useEffect } from "react";
import { removeJwt } from "../services/authService";

function LogOut() {
  useEffect(() => removeJwt(), []);
  window.location = "/";

  return null;
}

export default LogOut;
