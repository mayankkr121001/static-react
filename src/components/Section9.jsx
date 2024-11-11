import React from 'react'
import section9Img1 from "../assets/section9Img1.png"
import section9Img2 from "../assets/section9Img2.png"

function Section9() {
  return (
    <div className="section9Container">
            <h1>Journey Through Knowledge: Blog Hub</h1>
            <div className="section9BlogOptions">
                <span>General Dentistry</span>
                <span>|</span>
                <span>Cosmetics Dentistry</span>
                <span>|</span>
                <span>Crowns & Bridges</span>
                <span>|</span>
                <span>Nutrition</span>
                <span>|</span>
                <span>Oral Surgery</span>
                <span>|</span>
                <span>Root Canal</span>
                <span>|</span>
                <span>Implants & Dentures</span>
            </div>
            <div className="section9BlogsDiv">
                <div className="section9Blog">
                    <img src={section9Img1}/>
                    <div className="section9BlogInfo">
                        <p>Dry Sockets Demystified: Understanding the connection to tooth extraction</p>
                        <p>12th Feb 2024 | 2 min read</p>
                    </div>
                </div>
                <div className="section9Blog">
                    <img src={section9Img1}/>
                    <div className="section9BlogInfo">
                        <p>Dry Sockets Demystified: Understanding the connection to tooth extraction</p>
                        <p>12th Feb 2024 | 2 min read</p>
                    </div>
                </div>
                <div className="section9Blog">
                    <img src={section9Img1}/>
                    <div className="section9BlogInfo">
                        <p>Dry Sockets Demystified: Understanding the connection to tooth extraction</p>
                        <p>12th Feb 2024 | 2 min read</p>
                    </div>
                </div>
                <div className="section9Blog">
                    <img src={section9Img1}/>
                    <div className="section9BlogInfo">
                        <p>Dry Sockets Demystified: Understanding the connection to tooth extraction</p>
                        <p>12th Feb 2024 | 2 min read</p>
                    </div>
                </div>
                <div className="section9Blog">
                    <img src={section9Img1}/>
                    <div className="section9BlogInfo">
                        <p>Dry Sockets Demystified: Understanding the connection to tooth extraction</p>
                        <p>12th Feb 2024 | 2 min read</p>
                    </div>
                </div>
                <div className="section9Blog">
                    <img src={section9Img1}/>
                    <div className="section9BlogInfo">
                        <p>Dry Sockets Demystified: Understanding the connection to tooth extraction</p>
                        <p>12th Feb 2024 | 2 min read</p>
                    </div>
                </div>
                
                
            </div>
            <div className="section9ExploreMore">
                <img src={section9Img2}/>
            </div>
        </div>
  )
}

export default Section9