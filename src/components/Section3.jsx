import React from 'react'
import rootCanal from "../assets/rootCanal.png"
import braces from "../assets/braces.png"
import whitening from "../assets/whitening.png"
import invisibleBraces from "../assets/invisibleBraces.png"
import Implant from "../assets/Implant.png"
import SmileMakeover from "../assets/SmileMakeover.png"
import kidsDent from "../assets/kidsDent.png"
import gumTrt from "../assets/gumTrt.png"
import wisdomT from "../assets/wisdomT.png"
import Laser from "../assets/Laser.png"
import crownBridges from "../assets/crownBridges.png"
import dentures from "../assets/dentures.png"
import exploreTreatment from "../assets/exploreTreatment.png"

function Section3() {
  return (
    <div className="section3Container">
            <div className="section3Div">
                <h1>All dental issues from simple cleaning </h1>
                <h1>to full mouth rehabilitation under one roof</h1>
                <div className="section3OptionsDiv">
                    <div className="section3Option">
                        <img src={rootCanal}/>
                        <p>Root Canal Treatment</p>
                    </div>
                    <div className="section3Option">
                        <img src={braces}/>
                        <p>Braces</p>
                    </div>
                    <div className="section3Option">
                        <img src={whitening}/>
                        <p>Teeth whitening</p>
                    </div>
                    <div className="section3Option">
                        <img src={invisibleBraces}/>
                        <p>Invisible Braces</p>
                    </div>
                    <div className="section3Option">
                        <img src={Implant}/>
                        <p>Dental Implants</p>
                    </div>
                    <div className="section3Option">
                        <img src={SmileMakeover}/>
                        <p>Smile Makeover</p>
                    </div>
                    <div className="section3Option">
                        <img src={kidsDent}/>
                        <p>Kids Dentistry</p>
                    </div>
                    <div className="section3Option">
                        <img src={gumTrt}/>
                        <p>Gum Treatment</p>
                    </div>
                    <div className="section3Option">
                        <img src={wisdomT}/>
                        <p>Wisdom tooth</p>
                    </div>
                    <div className="section3Option">
                        <img src={Laser}/>
                        <p>Laser/Painless Dentistry</p>
                    </div>
                    <div className="section3Option">
                        <img src={crownBridges}/>
                        <p>Crowns & Bridges</p>
                    </div>
                    <div className="section3Option">
                        <img src={dentures}/>
                        <p>Dentures</p>
                    </div>
                </div>
                <div className="section3ExploreBtn">
                    <img src={exploreTreatment}/>
                </div>
            </div>
        </div>
  )
}

export default Section3