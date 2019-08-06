import React from "react";
import { Form } from "formik";
import ToggleButton from "./ToggleButton";
import ShiftDetails from "./ShiftDetails";
import NameList from "./NameList";
import SearchBar from "./SearchBar";
import ProgressBar from "./ProgressBar";
import ErrorMessage from "./ErrorMessage";
import ExpireDate from "./ExpireDate";
import Description from "./Description";
import TechName from "./TechName";

const MainForm = props => {
  const {
    techName,
    setTechName,
    dummyName,
    handleChange,
    setFieldValue,
    errors,
    touched,
    values
  } = props;
  return (
    <>
      <div className="custom-form border border-secondary rounded p-3 m-4">
        <div className="page-header">
          <h1>Shift Schedule Form</h1>
        </div>
        <Form className="custom-form">
          <div className="row ">
            <div className="container custom-toggle">
              <ToggleButton setFieldValue={setFieldValue} />
            </div>
          </div>
          <div className="row ">
            <ShiftDetails onChange={handleChange} />
            <div className="col col-sm-5">
              <TechName techName={techName} />
              {
                <ErrorMessage
                  errors={errors.techName}
                  touched={touched.techName}
                />
              }
              <ExpireDate />
              {
                <ErrorMessage
                  errors={errors.expireDate}
                  touched={touched.expireDate}
                />
              }
              <Description handleChange={handleChange} />
              {
                <ErrorMessage
                  errors={errors.description}
                  touched={touched.description}
                />
              }
              <ProgressBar
                techName={values.techName}
                expireDate={values.expireDate}
                description={values.description}
                ShiftDetails={values.ShiftDetails}
              />
            </div>
            <div className="col col-sm-4">
              <SearchBar
                name="searchbar"
                namesList={dummyName}
                setTechName={setTechName}
                setFieldValue={setFieldValue}
              />
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
    </>
  );
};

export default MainForm;
