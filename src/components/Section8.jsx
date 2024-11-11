import React, {useEffect, useRef} from 'react'
import section8LearnMore from "../assets/section8LearnMore.png"
import { slideMouseDown, slideMouseLeave, slideMouseUp, slideMouseMove } from '../utils/mouseDrag.js'


function Section8() {

    const section8Slide = useRef(null);

    useEffect(()=>{
        section8Slide.current.scrollLeft = section8Slide.current.scrollWidth / 2 - section8Slide.current.clientWidth / 2;
    }, [])

  return (
    <div ref={section8Slide} onMouseDown={(e) => slideMouseDown(e, section8Slide.current)} onMouseLeave={() => slideMouseLeave(section8Slide.current)} onMouseUp={() => slideMouseUp(section8Slide.current)} onMouseMove={(e) => slideMouseMove(e, section8Slide.current)} className="section8Container">
            <div className="section8Options section8Option1">
                <div className="section8OptionInfo">
                    <h1>Assuring Cleanliness</h1>
                    <p>Rigid 4-Step Sterilization process, assuring a safe a spotless clinic</p>
                    <img src={section8LearnMore}/>
                </div>
            </div>
            <div className="section8Options section8Option2">
                <div className="section8OptionInfo">
                    <h1>Experience AIPS</h1>
                    <p>Our AI- Powered Sterilization (AIPS) Monitoring system from DORI, USA Exclusively at Clove</p>
                    <img src={section8LearnMore}/>
                </div>
            </div>
            <div className="section8Options section8Option3">
                <div className="section8OptionInfo">
                    <h1>Uncompromised Safety</h1>
                    <p>10X Safety Protocols for a secure and worry-free dental experience</p>
                    <img src={section8LearnMore}/>
                </div>
            </div>
        </div>
  )
}

export default Section8