import React from "react";
import {Field} from 'formik';
const ExpireDate = () => (
  <>
    <label htmlFor="expireDate">Expire Date:</label>
    <Field
      type="date"
      name="expireDate"
      className="form-control p-1 mb-3 "
      style={{ width: "50%" }}
    />
  </>
);

export default ExpireDate;