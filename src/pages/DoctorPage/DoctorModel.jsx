import React from "react";
import { ReactDOM } from "react-dom";
import "./DoctorPage.css";

function DoctorModel(props) {
  return (

      <div className="Total-content">

        <div className="Image-file">
          <figure>
            <img className="Image" style={{width:"40rem",height:"14rem"}} src={props.image} />
          </figure>
        </div>

        <div className="Desc-file">
          <h2 className="h2_class">
            <span className="layout" role="img">
              {props.name}
            </span>
          </h2>
          <h3 className="depart h3_class">{props.department}</h3>
          <h3 className="h3_class">{props.qualification}</h3>
          <h3 className="h3_class">{props.experience}</h3>
          <p >{props.description}</p>
        </div>

      </div>
  );
}

export default DoctorModel;
