import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

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
            <img src="/images/connect.svg" alt="" />
            <h1>Connect</h1>
            <h4>
              We understand healthcare goes beyond signs, symptoms, diagnosis,
              and treatment. It’s about the deep connection between doctors and
              patients that leads to continuous care and sustained, better
              outcomes.
            </h4>
          </div>
          <div>
            <img src="/images/trust.svg" alt="" />
            <h1>Trust</h1>
            <h4>
              We work on trust. We are aware of the responsibility placed on us
              by 30 crore+ patients and over a lakh doctors. We always have and
              always will do everything we possibly can to uphold this trust.
            </h4>
          </div>
          <div>
            <img src="/images/transparency.svg" alt="" />
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
          <img src="/images/pd1.jpg" alt="" className="pd__images" />
          <img src="/images/pd5.jpg" alt="" className="pd__images" />
          <img src="/images/pd4.jpg" alt="" className="pd__images" />
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
                  <span>
                    The online health chat website was a great resource for me
                    when I had questions about my medical condition. The chat
                    feature was easy to use and I was able to get answers from
                    healthcare professionals quickly. It was a convenient way to
                    get the help I needed without having to leave my home.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Amit Kumar</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <span>
                    I appreciated that the online health chat website had a 24/7
                    support team available to answer my questions. I had some
                    concerns about my medication and was able to chat with a
                    pharmacist who provided me with helpful advice. It was a
                    great service.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Kritika Mittal</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <span>
                    The online health chat website was very helpful for
                    connecting me with other patients who were going through the
                    same thing as me. It was a supportive community and we were
                    able to share our experiences and offer each other advice.
                    It was a great way to feel less alone.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Uma Garg</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <span>
                    I liked that the online health chat website had a mental
                    health section where I could chat with a therapist. It was a
                    convenient and affordable way to get the support I needed.
                    The therapist was understanding and gave me helpful advice.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Yuraj Singh</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <span>
                    The online health chat website was a lifesaver for me when I
                    had a medical emergency. I was able to chat with a
                    healthcare professional who helped me determine if I needed
                    to seek immediate medical attention. It was a great way to
                    get advice quickly and without having to leave my home.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Aarti Bathoo</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <span>
                    Jason: "The online health chat website was easy to use and
                    had a lot of resources available. I was able to get answers
                    to my questions quickly and efficiently. It was a great way
                    to get medical advice without having to wait on hold for a
                    long time."
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Sara </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper__content1">
                  <h1>What our users have to say</h1>
                  <span>
                    I was hesitant to use an online health chat website at
                    first, but I was pleasantly surprised with how helpful it
                    was. I was able to chat with a doctor about my medical
                    concerns and they were able to provide me with a diagnosis
                    and treatment plan. It was a convenient way to get medical
                    help without having to leave my home.
                  </span>
                  <div className="swiper__footer1">
                    <img src="/images/user2.png" className="avatar" />
                    <h4>Avneet Kaur</h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      
    </div><Footer />
    </>
  );
};
 
export default About;