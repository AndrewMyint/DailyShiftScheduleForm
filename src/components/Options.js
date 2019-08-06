import React from "react";
import { Field } from "formik";

const Options = props => {
  var option = [];
  for (let i = 0; i <= 12; i++) {
    if (i === 0) {
      option.push(
        <option key={`startTime-${i}`} value={"-"}>
          -
        </option>
      );
    } else {
      option.push(
        <option key={`endTime-${i}`} value={`${i}`}>
          {i}
        </option>
      );
    }
  }
  return (
    <>
      <div className='col col-3' >
        <Field
          className="form-control custom-control"
          component="select"
          name={`${props.day}.startDate`}
        >
          {option}
        </Field>
      </div>
      <div className='col col-3'>
        <Field
          className="form-control custom-control"
          component="select"
          name={`${props.day}.endDate`}
        >
          {option}
        </Field>
      </div>
    </>
  );
};

export default Options;
