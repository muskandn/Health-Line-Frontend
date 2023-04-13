import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import PIC1 from "../../pd1.jpg"
import PIC2 from "../../pd5.jpg"
import PIC3 from "../../pd4.jpg"

import LOGO1 from "../../connect.png"
import LOGO2 from "../../trust.png"
import LOGO3 from "../../transparency.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./About2nd.css";

const About = () => {
  return (
    <>
    <div className="header__about">
        <Header />
      </div>
    <div className="about2nd">
      {/* <div className="header__about">
        <Header />
      </div> */}
      <div className="mission__about">
        <h1 className="mission__h1">Our Mission</h1>
        <p className="mission__text">
          The mission of our website is to provide a platform for individuals to
          access reliable, accurate, and helpful information about their health
          and well-being. The website aims to connect users with qualified
          healthcare professionals and peers who can offer guidance, support,
          and advice on a wide range of health-related topics. The primary goal
          of an online health chat website is to improve health outcomes by
          empowering users to make informed decisions about their health. By
          providing a safe and confidential space for users to ask questions and
          share their experiences, the website can help individuals take control
          of their health and manage their conditions more effectively. In
          addition to connecting users with healthcare professionals, we also
          offer educational resources, such as articles, videos, and webinars,
          to help users better understand their health and the various treatment
          options available to them. We also provide tools and resources to help
          users track their symptoms, monitor their progress, and manage their
          medications. Overall, our mission is to improve the health and
          well-being of individuals by providing them with the information,
          resources, and support they need to make informed decisions about
          their health. By promoting self-care and empowering individuals to
          take control of their health, the website can help to reduce
          healthcare costs, improve health outcomes, and enhance the overall
          quality of life for its users.
        </p>
      </div>
      <div className="des__about">
        <div className="des__about__heading">
          <h1>Our approach to health care</h1>
          <p>
            Our approach is centered on providing accessible and convenient
            health services to its users. We recognized that traditional
            healthcare services can be expensive, time-consuming, and often
            require travel to a healthcare facility, which can be particularly
            difficult for individuals with mobility or transportation issues.
            Therefore, we offers a unique opportunity for users to access
            healthcare services from the comfort of their own homes.
          </p>
        </div>
        <div className="about__sections">
          <div>
            <img src={LOGO1} alt="" />
            <h1>Connect</h1>
            <h4>
              We understand healthcare goes beyond signs, symptoms, diagnosis,
              and treatment. It’s about the deep connection between doctors and
              patients that leads to continuous care and sustained, better
              outcomes.
            </h4>
          </div>
          <div>
            <img src={LOGO2} alt="" />
            <h1>Trust</h1>
            <h4>
              We work on trust. We are aware of the responsibility placed on us
              by 30 crore+ patients and over a lakh doctors. We always have and
              always will do everything we possibly can to uphold this trust.
            </h4>
          </div>
          <div>
            <img src={LOGO3} alt="" />
            <h1>Transparency</h1>
            <h4>
              We believe in full disclosure. We believe in communicating openly
              and honestly, and holding ourselves to the highest ethical
              standards.
            </h4>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial__heading">
          <h1>
            Each time a patient finds a right doctor, we build a healthier
            nation.
          </h1>
          <p>
            When a patient finds a doctor who is a good fit for them, it can
            lead to better health outcomes in several ways. Firstly, the patient
            is more likely to trust and follow the doctor's advice, which can
            result in better adherence to treatment plans and improved health
            outcomes. Secondly, a good doctor-patient relationship can
            facilitate open communication, which enables the doctor to better
            understand the patient's needs and concerns and provide tailored
            care.
          </p>
        </div>
        <div className="images">
          <img src={PIC1} alt="" className="pd__images" />
          <img src={PIC2} alt="" className="pd__images" />
          <img src={PIC3} alt="" className="pd__images" />
        </div>
        
        {/* </div> */}
      </div>
      
    </div><Footer />
    </>
  );
};
 
export default About;
