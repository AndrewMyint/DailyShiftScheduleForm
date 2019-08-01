import React from "react";
import { Field } from "formik";

const Options = props => {
  var option = [];
  for (let i = 0; i <= 12; i++) {
    if (i === 0) {
      option.push(<option value={"-"}>-</option>);
    } else {
      option.push(<option value={`${i}`}>{i}</option>);
    }
  }

  return (
    <>
      <Field component="select">{option}</Field>
      <Field component="select">{option}</Field>
    </>
  );
};

export default Options;
