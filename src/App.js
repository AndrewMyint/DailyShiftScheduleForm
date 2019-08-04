import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Field, Form, Formik } from "formik";
import ToggleButton from "./components/ToggleButton";
import ShiftDetails from "./components/ShiftDetails";
import NameList from "./components/NameList";
import SearchBar from "./components/SearchBar";
import { name } from "faker";
import "./App.css";

var dummyName = [];
for (let i = 0; i < 20; i++) {
  dummyName.push({ name: name.findName() });
}
console.log(dummyName);

const App = () => {
  const [techName, setTechName] = useState("Choose Name");
  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        console.log("submmiting", values);
      }}
    >
      {({ handleChange, handleSubmit, setFieldValue }) => (
        <div className="container custom-form">
          <Form className="custom-form">
            <div className="row">
              <div className="container custom-toggle">
                <ToggleButton setFieldValue={setFieldValue} />
              </div>
            </div>
            <div className="row">
              <div className="col col-sm-3">
                <div className="container">
                  <div className="form-group">
                    <div className="row frm-to-label ">
                      <div>
                        <span style={{ marginRight: "10px" }}>From</span>
                        <span style={{ margin: "auto 10px" }}>To</span>
                      </div>
                    </div>
                    <ShiftDetails />
                  </div>
                </div>
              </div>
              <div className="col col-sm-6">
                <label for="techName" className="techName">
                  Tech Name:
                </label>
                <label
                  className=" form-control bg-light p-1 mb-3 rounded techName"
                  name="techName"
                  value={techName}
                  style={{ width: "50%" }}
                >
                  {techName}
                </label>

                <label for="expireDate">Expire Date:</label>
                <Field
                  type="date"
                  name="expireDate"
                  className="form-control p-1 mb-3 "
                  style={{ width: "50%" }}
                />

                <label for="exampleFormControlTextarea1">Description:</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                />
                <button>Submit</button>
              </div>
              <div className="col col-sm-3">
                <label for="searchbar">Search Bar:</label>
                <SearchBar name="searchbar" namesList={dummyName} />
                <label for="namelist">Name List:</label>
                <NameList
                  name="namelist"
                  dummyName={dummyName}
                  setTechName={setTechName}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

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

{
  /* <div className="App container border border-white">
          <header>Shift Schedule</header>
          <Form className='border border-black'>
            <div className="row rowStyle">
              <div className="col colStyle">
                <ToggleButton setFieldValue={setFieldValue} />
              </div>
              <div className="col colStyle">
                <SearchBar nameList={dummyName}/>
              </div>
            </div>
            <div className="row rowStyle">
              <div className="col colStyle">
                <div className="row rowStyle labelStyle">
                  <ShiftDetails />
                </div>
                <div className="row rowStyle">
                  <Field type="textArea" name="description" />
                </div>
              </div>
              <div className="col colStyle">
                <div className="row rowStyle">
                  {" "}
                  <label name="techName" value={techName}>
                    {techName}
                  </label>
                </div>
                <div className="row rowStyle">
                  <Field type="date" name="expireDate" />
                </div>
              </div>
              <div className="col colStyle">
                <NameList dummyName={dummyName} setTechName={setTechName} setFieldValue={setFieldValue}/>
              </div>
            </div>
            <div className="row rowStyle">Prograss Bar</div>
            <div className="row rowStyle">
              <button>Submit</button>
            </div>
          </Form>
        </div> */
}
