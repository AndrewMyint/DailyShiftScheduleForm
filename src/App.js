import React, { useState } from "react";
import { Form, Formik } from "formik";
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
        alert(JSON.stringify(values));
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
