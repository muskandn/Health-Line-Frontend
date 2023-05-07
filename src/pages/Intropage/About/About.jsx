import React from "react";
import "./About.css"
import ME from "../../../images/doctor.png"
import {BsFillAwardFill} from "react-icons/bs"
import {FaComments} from "react-icons/fa"
import {AiFillMedicineBox} from "react-icons/ai"
import {BsPersonFillCheck} from "react-icons/bs"
import {CheckIcon} from "@chakra-ui/icons"
export default function About(){
    return (
        <section id="about">
            {/* <h5>Get to know</h5>
            <h2>About Me</h2> */}
            <div className="container about__container">
                
                {/* <div className="about__me">
                    <div className="about__me-image">
                        
                    </div>
                </div> */}
                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__card">
                        <BsPersonFillCheck className='about__icon' />
                        <h4>A+ Doctors</h4>
                        
                    </div>
                    <div className="about__card">
                        <AiFillMedicineBox className='about__icon' />
                        <h4>Consultation</h4>
                        
                    </div>
                    <div className="about__card">
                        <FaComments className='about__icon' />
                        <h4>Chatting</h4>
                        
                    </div>
                    </div>
                    
                    {/* <h1>Insiant appointment with Doctors.<span>Guaranteed</span></h1>
                    <div className="points">
                        <CheckIcon/>
                        <h1>1000 Varified doctors</h1>
                    </div>
                    <div className="points" >
                        <CheckIcon/>
                        <h1>1K+ Patient recommendations</h1>

                    </div>
                    <div className="points">
                        <CheckIcon/>
                        <h1>3K Patients/year</h1>
                    </div>
                    <a href="#contact" className="button btn btn-primary">Find me the doctor</a>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. 
                    
                    </p> */}
                    
                </div>
                {/* <img src={ME} alt="About image" /> */}
            </div>
        </section>
    )
}