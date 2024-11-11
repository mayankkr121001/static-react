import React from 'react'
import section7img1 from "../assets/section7img1.png"
import section7img2 from "../assets/section7img2.png"
import section7img3 from "../assets/section7img1.png"
import section7img4 from "../assets/section7img1.png"

function Section7() {
    return (
        <div className="section7Container">
            <div className="section7SlideDiv">
                <div className="section7Options section7firstOption">
                    <img src={section7img1} />
                    <p><span>20 L+</span>Happy Patients</p>
                </div>
                <div className="section7Options section7SecondOption">
                    <img src={section7img2} />
                    <p><span>1200+</span>Dentists</p>
                </div>
                <div className="section7Options section7ThirdOption">
                    <img src={section7img3} />
                    <p><span>450+</span>Clinics</p>
                </div>
                <div className="section7Options section7FourthOption">
                    <img src={section7img4} />
                    <p><span>7 Days</span>Open</p>
                </div>
            </div>
            <div className="section7SlideDiv">
                <div className="section7Options section7firstOption">
                    <img src={section7img1} />
                    <p><span>20 L+</span>Happy Patients</p>
                </div>
                <div className="section7Options section7SecondOption">
                    <img src={section7img2} />
                    <p><span>1200+</span>Dentists</p>
                </div>
                <div className="section7Options section7ThirdOption">
                    <img src={section7img3} />
                    <p><span>450+</span>Clinics</p>
                </div>
                <div className="section7Options section7FourthOption">
                    <img src={section7img4} />
                    <p><span>7 Days</span>Open</p>
                </div>
            </div>
        </div>
    )
}

export default Section7