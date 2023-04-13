
import React from "react";
// import color from "../color.json";
import "./DoctorPage.css"

function DoctorModel(props) {
  return (
    <div className="container grid ">
      <div
        className="Total-content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 20,
        }}
      >
        <div className="Image-file">
          <figure>
            <img className="Image" src={props.image} />
          </figure>
        </div>

        <div className="Desc-file">
          <dt>
            <span className="layout" role="img">
              {props.name}
            </span>
          </dt>
          <dd>{props.department}</dd>
          <dd>{props.qualification}</dd>
          <dd>{props.experience}</dd>
          <dd>{props.description}</dd>
        </div>
      </div>
    </div>
  );
}

export default DoctorModel;