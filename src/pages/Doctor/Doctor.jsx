import React from "react";
import "./Doctor.css";
import ME from "../../doctor.png";
import { BsFillAwardFill } from "react-icons/bs";
import { CheckIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

export default function Doctor() {
  return (
    <section id="doctor">
      {/* <h5>Get to know</h5>
            <h2>doctor Me</h2> */}
      <div className="container doctor__container">
        <img src={ME} alt="doctor image" height="auto" width="900rem" />
        {/* <div className="doctor__me">
                    <div className="doctor__me-image">
                        
                    </div>
                </div> */}
        <div className="doctor__content">
          {/* <div className="doctor__cards">
                        <div className="doctor__card">
                        <BsFillAwardFill className='doctor__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Works</small>
                    </div>
                    <div className="doctor__card">
                        <BsFillAwardFill className='doctor__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Works</small>
                    </div>
                    <div className="doctor__card">
                        <BsFillAwardFill className='doctor__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Works</small>
                    </div>
                    </div>
                     */}
          <h1>
            Insiant appointment with Doctors.<span>Guaranteed</span>
          </h1>
          <div className="Point">
            <div className="points">
              <CheckIcon />
              <h2>1000 Varified doctors</h2>
            </div>
            <div className="points">
              <CheckIcon />
              <h2>1K+ Patient recommendations</h2>
            </div>
            <div className="points">
              <CheckIcon />
              <h2>3K Patients/year</h2>
            </div>
          </div>

          {/* <a href="#contact" className="button btn btn-primary">
            Find me the doctor
          </a> */}
          <Link to={"/doctor"} className="button">
            Find me the doctor
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </p>
        </div>
      </div>
    </section>
  );
}
