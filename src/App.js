import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { withFormik, Field, Form } from "formik";
import ToggleButton from "./components/ToggleButton";
import { Button } from "react-bootstrap";
import ShiftDetails from "./components/ShiftDetails";

import "./App.css";

function App() {
  return (
    <div className="App container">
      <Form>
        <div className="row rowStyle">
          <div className="col colStyle">
            <ToggleButton />
          </div>
          <div className="col colStyle">search bar</div>
        </div>
        <div className="row rowStyle">
          <div className="col colStyle">
            <div className="row rowStyle">
              <ShiftDetails />
            </div>
            <div className="row rowStyle">
              <Field type="textArea" />
            </div>
          </div>
          <div className="col colStyle">
            <div className="row rowStyle"> tech Lead</div>
            <div className="row rowStyle">
              <Field type="date" />
            </div>
          </div>
          <div className="col colStyle">
            <Field type="textArea" />
          </div>
        </div>
        <div className="row rowStyle">Prograss Bar</div>
        <div className="row rowStyle">
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  );
}


const FormikApp = withFormik({})(App);


export default FormikApp;
