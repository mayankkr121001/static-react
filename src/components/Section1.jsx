import React from 'react'
import section1 from "../assets/section1.png"
import section1slider from "../assets/section1slider.png"
import section1img2 from "../assets/section1img2.png"


function Section1() {
  return (
    <div className="section1Container">
            <div className="section1Slides">
                <div className="secton1Info">
                    <h1>Advance Dental Health Plan</h1>
                    <p>Dental care worth ₹8,000/-</p>
                    <h3>only at ₹550/-</h3>
                    <button>Buy Now</button>
                </div>
                <div className="section1Image">
                    <img src={section1} alt="image"/>
                </div>
            </div>
            <div className="secton1SliderIcon">
                <img src={section1slider}/>
            </div>
            <div className="section1Slides section1Slide2">
                <div className="secton1Info section1Info2">
                    <h1>Your Smile,</h1>
                    <h1>Our Priority , At <span>Clove Dental</span></h1>
                    <p>Explore wide range of general dentistry solutions</p>
                    <button>Book Appointment</button>
                </div>
                <div className="section1Image section1Image2">
                    <img src={section1img2} alt="image"/>
                </div>
            </div>
        </div>
  )
}

export default Section1