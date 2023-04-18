import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Branches</h3>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> mumbai{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> jogeshwari{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> goregaon{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> navi mumbai{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> andheri{" "}
            </a>
          </div>

          <div className="box">
            <h3>Quick Links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> about{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> doctors{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> patient registration{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> doctor registration{" "}
            </a>
            
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +123-456-7890{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> +111-222-3333{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> shaikhanas@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> anasshaikh@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104{" "}
            </a>
          </div>

          <div className="box">
            <h3>Follow Us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          Copyright @2023, Health Line. All rights reserved.{" "}
        </div>
      </section>

      
    </>
  );
};

export default Footer;
