import React from "react";
import doctor_info from "./doctor_info";
import DoctorModel from "./DoctorModel";
import colors from "./color.json";
import "./DoctorPage.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Doctor(doctor_info) {
  console.log(colors, "json");
  return (
    <DoctorModel
      id={doctor_info.id}
      key={doctor_info.id}
      name={doctor_info.name}
      image={doctor_info.image}
      department={doctor_info.department}
      qualification={doctor_info.qualification}
      experience={doctor_info.experience}
      description={doctor_info.description}
      color={doctor_info.color}
    />
  );
}

function DoctorPage() {
  return (
    <div>
      <Header />
      <h1>
        <span>Doctor</span>
      </h1>
      <dl className="dictionary" style={{paddingBottom: "10rem"}}>{doctor_info.map(Doctor)}</dl>
    <Footer />
    </div>
  );
}

export default DoctorPage;
