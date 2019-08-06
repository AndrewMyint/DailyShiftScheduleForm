import React from "react";

const Description = (props) => (
  <>
    <label htmlFor="exampleFormControlTextarea1">Description:</label>
    <textarea
      onChange={props.handleChange}
      name="description"
      className="form-control"
      id="exampleFormControlTextarea1"
      rows="6"
    />
  </>
);

export default Description;