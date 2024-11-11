import React from 'react'
import section11Img1 from "../assets/section11Img1.png"
import section11Img2 from "../assets/section11Img2.png"
import section11Img3 from "../assets/section11Img3.png"
import section11Img4 from "../assets/section11Img4.png"

function Section11() {
  return (
    <div className="section11Container">
            <div className="section11Div">
                <h1>Beyond Dentistry</h1>
                <p>Mapping success in every area</p>
                <div className="section11OptionsDiv">
                    <div className="section11Option">
                        <img src={section11Img1}/>
                        <h4>Educational Videos</h4>
                    </div>
                    <div className="section11Option">
                        <img src={section11Img2}/>
                        <h4>News & Media</h4>
                    </div>
                    <div className="section11Option">
                        <img src={section11Img3}/>
                        <h4>Rewards</h4>
                    </div>
                    <div className="section11Option">
                        <img src={section11Img4}/>
                        <h4>Careers</h4>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Section11