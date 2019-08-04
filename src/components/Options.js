import React from "react";
import { Field } from "formik";

const Options = props => {
  var option = [];
  for (let i = 0; i <= 12; i++) {
    if (i === 0) {
      option.push(
        <option className="" value={"-"}>
          -
        </option>
      );
    } else {
      option.push(
        <option className="" value={`${i}`}>
          {i}
        </option>
      );
    }
  }

  return (
    <>
      <div className='col col-3'>
        <Field
          className="form-control custom-control "
          component="select"
          name={`${props.day}StartDate`}
        >
          {option}
        </Field>
      </div>
      <div className='col col-3'>
        <Field
          className="form-control custom-control "
          component="select"
          name={`${props.day}EndDate`}
        >
          {option}
        </Field>
      </div>
      {/* <div></div> */}
    </>
  );
};

export default Options;
