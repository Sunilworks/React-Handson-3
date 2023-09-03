import React,{Component} from "react";
import "./Form.css";

function Display(props) {
  return (
    <>
      <h1 className="head">EMPLOYEE FEEDBACK DATA</h1>
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


// Using Class Component

// class Display extends Component{
//   constructor(props){
//       super(props);
//       console.log(this.props.value);

//   }
//   render(){
//       return(
         
//           <>
//           <h1>EMPLOYEE FEEDBACK DATA</h1>
//           <div className="container">
//           {this.props.value.map((item,index)=>{
//               return(
//                   <div key={index}className="box">
//                   <p >Name:{item.name}|| Department:{item.Department}||Rating:{item.rate}</p>
//                   </div>
//               )
//           })

//           }
//           </div>
//           <div className="con">
//           <button onClick={this.props.toggleFunc}>Go Back</button>
//           </div>
//           </>
//       )
//   }
// }
// export default Display;
