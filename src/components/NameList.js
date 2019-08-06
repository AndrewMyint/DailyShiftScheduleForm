import React from "react";

const NameList = props => (
  <>
    <label style={{ display: "block" }} htmlFor="namelist">
      Name List:
    </label>
    <div className="list-group scrollable-menu">
      {props.dummyName.map((name, index) => (
        <button
          key={`${name}-${index}`}
          type="button"
          value={name.name}
          className="list-group-item list-group-item-action"
          onClick={e => {
            props.setFieldValue("techName", e.target.value);
            props.setTechName(e.target.value);
          }}
        >
          {name.name}
        </button>
      ))}
    </div>
  </>
);

export default NameList;
