import React from "react";

const ErrorMessage = props => {
  const { errors, touched } = props;
  return (
    <>
      {errors && touched ? (
        <span className="error-msg"> {errors}</span>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorMessage