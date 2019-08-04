import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const ToggleButtons = props => {
  return (
    <>
      <ToggleButtonGroup type="radio" name="options" defaultValue="Regular">
        <ToggleButton size='sm' variant='outline-dark' value="Regular" onClick={(e) => props.setFieldValue('ShiftType', e.target.value)}>Regular</ToggleButton>
        <ToggleButton size='sm' variant='outline-dark' value="Extra" onClick={(e) => props.setFieldValue('ShiftType', e.target.value)}>Extra</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ToggleButtons;
