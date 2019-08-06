import React, { useState } from "react";
import { Formik } from "formik";
import { name } from "faker";
import * as Yup from "yup";
import generateValitationShape from "./components/js/helper";
import MainForm from "./components/MainForm";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

var dummyName = [];
for (let i = 0; i < 20; i++) {
  dummyName.push({ name: name.findName() });
}
var nameList = dummyName.map(value => value.name);

const App = () => {
  const [techName, setTechName] = useState("Choose a name");
  return (
    <Formik
      initialValues={{
        ShiftType: "Regular",
        techName: "",
        expireDate: "",
        description: "",
        ShiftDetails: ""
      }}
      onSubmit={values => {
        let obj = {};
        obj.shiftType = values.ShiftType;
        obj.techLead = values.techName;
        obj.expirationDate = values.expireDate;
        obj.shiftDetails = [];
        let temp = Object.keys(values.ShiftDetails);
        temp.forEach((value, index) => {
          let tempObj = {};
          tempObj.day = value;
          tempObj.startDate = values.ShiftDetails[value].startDate
            ? `${values.ShiftDetails[value].startDate}:00`
            : `00`;
          tempObj.endDate = values.ShiftDetails[value].endDate
            ? `${values.ShiftDetails[value].endDate}:00`
            : `00`;
            obj.shiftDetails.push(tempObj);
        });
        // console.log(obj);
        alert(JSON.stringify(obj, null, 2));
      }}
      validationSchema={Yup.object().shape(generateValitationShape(nameList))}
      render={props => (
        <MainForm
          {...props}
          techName={techName}
          setTechName={setTechName}
          dummyName={dummyName}
        />
      )}
    />
  );
};

export default App;
