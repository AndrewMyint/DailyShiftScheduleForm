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
  const DailyShift = totalDays.map(day => {
    return (
      <>
        <div className="row">
          <div className="col col-5">
            <label className="custom-label" for={day} name={day}>
              {day}
            </label>
          </div>
          <Options day={day} />
        </div>
      </>
    );
  });
  return <>{DailyShift}</>;
};

export default ShiftDetails;
