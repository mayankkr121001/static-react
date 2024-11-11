import React from 'react'
import googleRating from "../assets/googleRating.png"

function Section2() {
  return (
    <div className="section2Container">
            <div className="section2Info">
                <h2><span>450+</span> World Class Clinics</h2>
                <p>Manned by 1200+ Super Specialists</p>
            </div>
            <div className="section2RatingClinic">
                <div className="section2Rating">
                    <img src={googleRating} />
                </div>
                <div className="section2Clinic">
                    <select>
                        <option>Select your city</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                    <button>Locate nearest Clove clinic</button>
                </div>
            </div>
        </div>
  )
}

export default Section2