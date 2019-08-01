import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
// const ToggleButton = () => {
//   return (
//     <>
//       <button type='button'>Regular</button>
//       <button type='button'>Extra</button>
//     </>
//   );
// };
const ToggleButtons = props => {
  return (
    <>
      <ButtonGroup toggle className="mt-3" name="ShiftType">
        <ToggleButton
          type="radio"
          name="Regular"
          defaultChecked
          value="Regular"
          onClick={() => props.setFieldValue("ShiftType", "Regular")}
        >
          Regular
        </ToggleButton>
        <ToggleButton
          type="radio"
          name="Extra"
          value="Extra"
          onClick={() => props.setFieldValue("ShiftType", "Extra")}
        >
          Extra
        </ToggleButton>
      </ButtonGroup>
    </>
  );
};

export default ToggleButtons;
