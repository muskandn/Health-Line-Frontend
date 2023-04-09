import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>branches</h3>
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
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> service{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> about{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> gallery{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> price{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> reivew{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-arrow-right"></i> contact{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
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
            <h3>follow us</h3>
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
          Copyright @2023, Practo. All rights reserved.{" "}
        </div>
      </section>

      
    </>
  );
};

export default Footer;
