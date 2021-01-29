import React from "react";

const setErrorMessage = ({ message }) => {
  if (message === "") {
    return "";
  }

  return <div className="error">{message}</div>;
};

export default setErrorMessage;