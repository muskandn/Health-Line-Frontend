import React from "react";
import "./Service.css";
import ME from "../../servicesRed.png";
import { BsFillAwardFill } from "react-icons/bs";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <section id="service">
      {/* <h5>Get to know</h5>
            <h2>service Me</h2> */}
      <div className="container service__container">
        {/* <div className="service__me">
                    <div className="service__me-image">
                        
                    </div>
                </div> */}
        <div className="service__content">
          {/* <div className="service__cards">
                        <div className="service__card">
                        <BsFillAwardFill className='service__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Works</small>
                    </div>
                    <div className="service__card">
                        <BsFillAwardFill className='service__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Works</small>
                    </div>
                    <div className="service__card">
                        <BsFillAwardFill className='service__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Works</small>
                    </div>
                    </div>
                     */}
          <h1>
            Skip the waiting room.<span> Consult with a doctor</span>
          </h1>
          <div className="Point">
            <div className="points">
              <CheckIcon />
              <h2>Fees starting at Rs. 99</h2>
            </div>
            <div className="points">
              <CheckIcon />
              <h2>Verified doctors respond in 5 minutes</h2>
            </div>
            <div className="points">
              <CheckIcon />
              <h2>100% Private and confidential</h2>
            </div>
          </div>
          <Link to={"/doctor"} className="button">
            Find me the doctor
          </Link>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <img src={ME} alt="service image" />
      </div>
    </section>
  );
}
