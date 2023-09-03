import React, { Component } from "react";
import Display from "./Display";

export default class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Dept: "",
      Rat: "",
      EmpData: [],
      Clicked: true,
    };
    // console.log(this.state);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); //To dynamicaly set the key value pair in javascript
    // console.log(this.state);
    // console.log(event);
    // console.log(event.target.value);
};

toogleFunction=()=>{
  this.setState({Clicked: !this.state.Clicked})
//   console.log(this.state.Clicked);
}
  handleSubmit = (e) => {
    e.preventDefault();
    const tempObj = {
      name: this.state.Name,
      department: this.state.Dept,
      rating: this.state.Rat,
    };
    this.state.EmpData.push(tempObj);
    this.setState({
      EmpData: this.state.EmpData,
      Name: "",
      Dept: "",
      Rat: "",
      Clicked: !this.state.Clicked
    });
    // console.log(this.state.Clicked);
  };


  render() {
    return (
      <div>
        {this.state.Clicked ? 
          <>
            <h1 className="head">EMPLOYEE FEEDBACK FORM</h1>
            <form className="form">
              <label htmlFor="name">Name :</label>
              <input
                id="name"
                placeholder="Enter Your Name"
                type="text"
                name="Name"
                onChange={this.handleChange}
                value={this.state.Name}
                required
              />

              <br />

              <label htmlFor="dept">Department :</label>
              <input
                id="dept"
                placeholder="Enter Your Dept"
                type="text"
                name="Dept"
                onChange={this.handleChange}
                value={this.state.Dept}
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
                onChange={this.handleChange}
                value={this.state.Rat}
              />

              <br />

              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </>

           :

          <Display
            value={this.state.EmpData}
            toggleFunc={this.toogleFunction}
          />
        }
      </div>
    );
  }
}

// export default Formclass;

//form validation package formic,yup
