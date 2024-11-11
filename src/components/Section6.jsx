import React, { useRef } from 'react'
import section6First1 from "../assets/section6First1.png"
import section6First2 from "../assets/section6First2.png"
import section6First3 from "../assets/section6First3.png"
import section6Second1 from "../assets/section6Second1.png"
import section6Second2 from "../assets/section6Second2.png"
import section6Second3 from "../assets/section6Second3.png"
import { slideMouseDown, slideMouseLeave, slideMouseUp, slideMouseMove } from '../utils/mouseDrag.js'



function Section6() {
    const section6Slide = useRef(null);

  return (
    <div className="section6Container">
            <div className="section6FirstDiv">
                <h1>Unmatched Dental Excellence by 1200+ Specialists</h1>
                <div className="section6FirstOptionsDiv">
                    <div className="section6FirstOption">
                        <img src={section6First1}/>
                        <div>
                            <h4>Team of Specialists</h4>
                            <p><span>75+</span> Orthodontists</p>
                        </div>
                    </div>
                    <div className="section6FirstOption">
                        <img src={section6First2}/>
                        <div>
                            <p>Leading with</p>
                            <p><span>80%</span> women</p>
                        </div>
                    </div>
                    <div className="section6FirstOption">
                        <img src={section6First3}/>
                        <div>
                            <p><span>65%</span> MDS</p>
                            <p>Doctors for specialised care</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section6SecondDiv">
                <div ref={section6Slide} onMouseDown={(e) => slideMouseDown(e, section6Slide.current)} onMouseLeave={() => slideMouseLeave(section6Slide.current)} onMouseUp={() => slideMouseUp(section6Slide.current)} onMouseMove={(e) => slideMouseMove(e, section6Slide.current)} className="section6Second1">
                    <img draggable="false" src={section6Second1}/>
                    <img draggable="false" src={section6Second2}/>
                    <img draggable="false" src={section6Second3}/>
                    <img draggable="false" src={section6Second1}/>
                    <img draggable="false" src={section6Second2}/>
                    <img draggable="false" src={section6Second3}/>
                </div>
                <button>Meet Our Doctors</button>
            </div>
        </div>
  )
}

export default Section6