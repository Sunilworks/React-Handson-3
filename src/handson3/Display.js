import React from "react";
import "./Form.css";

function Display(props) {
  return (
    <>
      <h1 className="head">EMPLOYEE FEEDBACK FORM</h1>
      <br />
      <br />
      <div className="dataBox">
        {
            props.empData.map((item, index) => {
            return (
                <div key={index} className="displayBox">
                <span>Name: {item.name} || </span>
                <span>Department: {item.department} || </span>
                <span>Rating: {item.rating}</span>
                </div>
            );
            })
        }
      </div>
      <br /><br /><br /><br /><br />
      <button onClick={props.goBack} style={{marginLeft: 650}}> Go Back</button>
    </>
  );
}

export default Display;
