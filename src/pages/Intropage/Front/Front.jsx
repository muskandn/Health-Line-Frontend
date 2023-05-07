import { useHistory } from "react-router";
import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Navbar from "../../Navbar/Navbar";
import Doctor from "../Doctor/Doctor";
import About from "../About/About";
import Footer from "../../Footer/Footer";
import Service from '../Servicess/Service'
import Home from "../Home/Home";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Front = () => {
    
  return (
   <>
  <Navbar/>
  <div>
    </div>
    {/* <Link to={"/signp"} className="contact-button">
        <div>
        <span>  Patient varification </span>
        </div>
    
    </Link>
    <Link to={"/signd"} className="contact-button">
        <div>
        <span> Doctor varification  </span>
        </div>
    </Link> */}
    {/* <Header/> */}
    {/* <Navbar/> */}
    {/* <img src={IMG} alt="" /> */}
    <div style={{paddingTop:"60px"}}>
      <Home/>
  <About/>
  <Doctor/>
   <Service/>
    </div>
    
    
    <div className="main__div">
          <div className="swiper__main">
            <Swiper
              // spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                    <span>
                    The online health chat website was a great resource for me
                    when I had questions about my medical condition. The chat
                    feature was easy to use and I was able to get answers from
                    healthcare professionals quickly. It was a convenient way to
                    get the help I needed without having to leave my home.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Amit Kumar</h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                    <span>
                    I appreciated that the online health chat website had a 24/7
                    support team available to answer my questions. I had some
                    concerns about my medication and was able to chat with a
                    pharmacist who provided me with helpful advice. It was a
                    great service.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Kritika Mittal</h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                    <span>
                    The online health chat website was very helpful for
                    connecting me with other patients who were going through the
                    same thing as me. It was a supportive community and we were
                    able to share our experiences and offer each other advice.
                    It was a great way to feel less alone.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Uma Garg</h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                    <span>
                    I liked that the online health chat website had a mental
                    health section where I could chat with a therapist. It was a
                    convenient and affordable way to get the support I needed.
                    The therapist was understanding and gave me helpful advice.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Yuraj Singh</h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                  <span>
                    The online health chat website was a lifesaver for me when I
                    had a medical emergency. I was able to chat with a
                    healthcare professional who helped me determine if I needed
                    to seek immediate medical attention. It was a great way to
                    get advice quickly and without having to leave my home.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Aarti Bathoo</h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                    <span>
                    Jason: "The online health chat website was easy to use and
                    had a lot of resources available. I was able to get answers
                    to my questions quickly and efficiently. It was a great way
                    to get medical advice without having to wait on hold for a
                    long time."
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Sara </h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <div className="content2">
                    <span>
                    I was hesitant to use an online health chat website at
                    first, but I was pleasantly surprised with how helpful it
                    was. I was able to chat with a doctor about my medical
                    concerns and they were able to provide me with a diagnosis
                    and treatment plan. It was a convenient way to get medical
                    help without having to leave my home.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/boy1.png" className="avatar" />
                    <h4>Avneet Kaur</h4>
                  </div>
                  </div>
                  
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>
          <Footer/>
   </>
    
    
    
  )
}

export default Front