import React, { useState } from "react";
import "./Form.css";
import Display from "./Display";

function Form() {
  const [Fstate, setFstate] = useState({
    Name: "",
    Dept: "",
    Rat: "",
    EmpData: [],
  });

  const [SubmitState, setSubmitState] = useState(true);

  const toGoBack = () => {
    setSubmitState(!SubmitState);
    
  };
  // console.log(SubmitState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // console.log(value);
    setFstate({ ...Fstate, [name]: value });
    console.log([name]);
  };

  const buttonFunc = (event) => {
    event.preventDefault();
    const saveData = {
      name: Fstate.Name,
      department: Fstate.Dept,
      rating: Fstate.Rat,
    };
    Fstate.EmpData.push(saveData);
    setFstate({ EmpData: Fstate.EmpData });
    setSubmitState(!SubmitState);
    
  };

  return (
    <div>
      { SubmitState ? (
        <>
          <h1 className="head">EMPLOYEE FEEDBACK FORM</h1>
          <form className="form">
            <label htmlFor="name">Name :</label>
            <input
              id="name"
              placeholder="Enter Your Name"
              type="text"
              name="Name"
              onChange={handleOnChange}
              value={Fstate.Name}
              required
            />

            <br />

            <label htmlFor="dept">Department :</label>
            <input
              id="dept"
              placeholder="Enter Your Dept"
              type="text"
              name="Dept"
              onChange={handleOnChange}
              value={Fstate.Dept}
              required
            />

            <br />

            <label htmlFor="rat">Rating :</label>
            <input
              id="rat"
              placeholder="Enter Rating"
              type="number"
              required
              name="Rat"
              onChange={handleOnChange}
              value={Fstate.Rat}
            />

            <br />

            <button type="submit" onClick={buttonFunc} >
              Submit
            </button>
          </form>
        </>
      ) : (
        <Display empData={Fstate.EmpData} goBack={toGoBack} />
      )}
    </div>
  );
}

export default Form;
