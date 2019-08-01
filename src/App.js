import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Field, Form, Formik } from "formik";
import ToggleButton from "./components/ToggleButton";
import ShiftDetails from "./components/ShiftDetails";

import "./App.css";

const App = () => (
  <Formik
    initialValues={{}}
    onSubmit={values => {
      console.log("submmiting", values);
    }}
  >
    {({ handleChange, handleSubmit, setFieldValue }) => (
      <div className="App container">
        <Form>
          <div className="row rowStyle">
            <div className="col colStyle">
              <ToggleButton setFieldValue={setFieldValue}/>
            </div>
            <div className="col colStyle">search bar</div>
          </div>
          <div className="row rowStyle">
            <div className="col colStyle">
              <div className="row rowStyle">
                <ShiftDetails />
              </div>
              <div className="row rowStyle">
                <Field type="textArea" name="description" />
              </div>
            </div>
            <div className="col colStyle">
              <div className="row rowStyle"> tech Lead</div>
              <div className="row rowStyle">
                <Field type="date" name="expireDate" />
              </div>
            </div>
            <div className="col colStyle">
              <Field type="textArea" name="nameList" />
            </div>
          </div>
          <div className="row rowStyle">Prograss Bar</div>
          <div className="row rowStyle">
            <button>Submit</button>
          </div>
        </Form>
      </div>
    )}
  </Formik>
);

export default App;

// ShiftDetails: { MondayStartDate: "", MondayEndDate: "" },
// TuesdayStartDate: "",
// TuesdayEndDate: "",
// WednesdayStartDate: "",
// WednesdayEndDate: "",
// ThursdayStartDate: "",
// ThursdayEndDate: "",
// FridayStartDate: "",
// FridayEndDate: "",
// SaturdayStartDate: "",
// SaturdayEndDate: "",
// SundayStartDate: "",
// SundayEndDate: "",
// expireDate: "",
// description: "",
// nameList: ""
