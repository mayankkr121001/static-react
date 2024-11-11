import React, { useRef } from 'react'
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
import review4 from "../assets/review4.png"
import review5 from "../assets/review5.png"
import { slideMouseDown, slideMouseLeave, slideMouseUp, slideMouseMove } from '../utils/mouseDrag.js'

function Section5() {

    const section5Slide =useRef(null);

    return (
        <div className="section5Container">
            <h1>In their Own Words</h1>
            <div ref={section5Slide} onMouseDown={(e) => slideMouseDown(e, section5Slide.current)} onMouseLeave={() => slideMouseLeave(section5Slide.current)} onMouseUp={() => slideMouseUp(section5Slide.current)} onMouseMove={(e) => slideMouseMove(e, section5Slide.current)} className="section5ReviewsDiv">
                <div className="section5Review">
                    <img draggable="false" src={review1} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review2} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review3} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review4} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review5} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review1} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review2} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review3} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review4} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>
                <div className="section5Review">
                    <img draggable="false" src={review5} />

                    <p>Shubham</p>
                    <h4>Braces</h4>
                </div>

            </div>
        </div>
    )
}

export default Section5