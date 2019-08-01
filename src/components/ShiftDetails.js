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
      <label type="text">
        {day} <Options />
      </label>
    );
  });
  return <>{DailyShift}</>;
};

export default ShiftDetails;
