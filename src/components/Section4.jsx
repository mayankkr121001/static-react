import React from 'react'
import safetyProtocols from "../assets/safetyProtocols.png"
import neighbour from "../assets/neighbour.png"
import expert from "../assets/expert.png"

function Section4() {
  return (
    <div className="section4Container">
            <div className="section4Form">
                <h2>Expert Guidance for Healthy Smiles</h2>
                <p>Contact Now</p>
                <div className="section4FormInputs">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Mobile Number"/>
                    <select name="concern">
                        <option>Select Concern</option>
                        <option value="Root Canal">Root Canal</option>
                        <option value="Braces">Braces</option>
                        <option value="Invisible Braces">Invisible Braces</option>
                        <option value="Kids Dentistry">Kids Dentistry</option>
                        <option value="Crown & Bridges">Crown & Bridges</option>
                    </select>
                    <button>Book A Free Consultation</button>
                </div>
            </div>
            <div className="section4Others">
                <div className="section4Safety">
                    <div className="section4SafetyInfo">
                        <div>
                            <h1>10x Safety Protocols</h1>
                            <p>Monitored by DORI</p>
                            <p>(Artificial Intelligence System)</p>
                        </div>

                        <h4>Learn More -</h4>
                    </div>
                    <div className="section4SafetyImage">
                        <img src={safetyProtocols}/>
                    </div>
                </div>
                <div className="section4NeighbourExpertDiv">
                    <div className="section4Neighbour">
                        <h4>450+ Neighbourhood</h4>
                        <p>Clinics Pan India</p>
                        <img src={neighbour}/>
                        <p>Locate Clinic near you -</p>
                    </div>
                    <div className="section4Expert">
                        <h4>1200+ Expert Doctors</h4>
                        <p>Covering All Specialities</p>
                        <img src={expert}/>
                        <p>Explore Dentists Nearby -</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Section4