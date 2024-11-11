import React from 'react'
import section10Img1 from "../assets/section10Img1.png"
import section10Bata from "../assets/section10Bata.png"
import section10Taj from "../assets/section10Taj.png"
import section10Vd from "../assets/section10Vd.png"
import section10Lakme from "../assets/section10Lakme.png"
import section10Marsh from "../assets/section10Marsh.png"
import section10Iffco from "../assets/section10Iffco.png"
import section10Suzuki from "../assets/section10Suzuki.png"
import section10PB from "../assets/section10PB.png"
import section10RegisterCompany from "../assets/section10RegisterCompany.png"

function Section10() {
  return (
    <div className="section10Container">
            <div className="section10ImageDiv">
                <img src={section10Img1} alt="image"/>
            </div>
            <div className="section10InfoDiv">
                <h1>250+</h1>
                <h2>Corporate Trust Us</h2>
                <p>Check if your company is one of them & avail exclusive benefits</p>
                <div className="section10InfoImages">
                    <div className="section10InfoImagesSlides">
                        <img src={section10Bata}/>
                        <img src={section10Taj}/>
                        <img src={section10Vd}/>
                        <img src={section10Lakme}/>
                        <img src={section10Marsh}/>
                        <img src={section10Iffco}/>
                        <img src={section10Suzuki}/>
                        <img src={section10PB}/>
                    </div>
                    <div className="section10InfoImagesSlides">
                        <img src={section10Bata}/>
                        <img src={section10Taj}/>
                        <img src={section10Vd}/>
                        <img src={section10Lakme}/>
                        <img src={section10Marsh}/>
                        <img src={section10Iffco}/>
                        <img src={section10Suzuki}/>
                        <img src={section10PB}/>
                    </div>
                    
                </div>
                <div className="section10InfoButton">
                    <button>Book Appointment</button>
                </div>
            </div>
            <div className="section10registerCompany">
                <img src={section10RegisterCompany}/>
            </div>
        </div>
  )
}

export default Section10