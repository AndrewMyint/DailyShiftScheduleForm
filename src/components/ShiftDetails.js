import React from "react";
import Options from "./Options";
var totalDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const ShiftDetails = props => {
  const DailyShift = totalDays.map((day, index) => {
    return (
      <>
        <div className="row" key={`${day}-${index}`}>
          <div className="col col-5">
            <label
              className="custom-label"
              htmlFor={day}
              name={`ShiftDetails.${day}`}
            >
              {day}
            </label>
          </div>
          <Options key={`${day}-${index}`} day={`ShiftDetails.${day}`} />
        </div>
      </>
    );
  });
  return (
    <>
      <div className="col col-sm-3">
        <div className="container">
          <div className="form-group">
            <div className="row frm-to-label ">
              <span style={{ marginRight: "10px" }}>From</span>
              <span style={{ margin: "auto 10px" }}>To</span>
            </div>
            {DailyShift}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShiftDetails;
