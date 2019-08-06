import React from "react";

const TechNames = (props) => {
  const {techName} = props;
  return (
    <>
      <label htmlFor="techName" className="techName">
        Tech Name:
      </label>
      <label
        className=" form-control bg-light p-1 mb-3 rounded techName"
        name="techName"
        value={techName}
        style={{ width: "50%" }}
      >
        {techName}
      </label>
    </>
  );
};

export default TechNames;