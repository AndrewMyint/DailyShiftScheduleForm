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
      <div >
        <label type="text" name={day}>
          {day} <Options day={day}/>
        </label>
      </div>
      <br/>
      </>
    );
  });
  return <>{DailyShift}</>;
};

export default ShiftDetails;
