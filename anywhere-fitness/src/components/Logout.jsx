import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    window.localStorage.removeItem("token");
  });

  return <Redirect to="/" />;
};

export default Logout;
