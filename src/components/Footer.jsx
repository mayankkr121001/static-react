import React from 'react'
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"
import footerLogo from "../assets/footerLogo.png"

function Footer() {
  return (
    <div className="footerContainer">
            <div className="footerOptionsDiv">
                <div className="footerOptions footerFirstOptionsDiv">
                    <h3>Treatments</h3>
                    <p>Laser Dentistery</p>
                    <p>Dental fillings</p>
                    <p>Root canal Treatment</p>
                    <p>Wisdom Teeth removal</p>
                    <p>Braces & Aligners</p>
                    <p>Clear Aligners</p>
                    <p>Dental Implants</p>
                    <p>Dental Implants</p>
                </div>
                <div className="footerOptions footerSecondOptionsDiv">
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>Services</p>
                    <p>About Us</p>
                    <p>Locations</p>
                    <p>Book Appointments</p>
                    <p>Contact Us</p>
                </div>
                <div className="footerOptions footerThirdOptionsDiv">
                    <h3>Explore Clove</h3>
                    <p>Our Team</p>
                    <p>Clinic Overview</p>
                    <p>Testimonials</p>
                    <p>Blogs</p>
                    <p>News</p>

                </div>
                <div className="footerOptions footerFourthOptionsDiv">
                    <h3>Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of service</p>
                    <p>Accessibility</p>
                </div>
                <div className="footerOptions footerFifthOptionsDiv">
                    <h3>Connect with Us</h3>
                    <div className="footerSocialsDiv">
                        <img src={instagram}/>
                        <img src={facebook}/>
                        <img src={youtube}/>
                    </div>
                </div>
            </div>
            <div className="footerLogoDiv">
                <img src={footerLogo}/>
            </div>
            <div className="footerRightsTextDiv">
                <p>All Rights Reserved - 2024, Clove Dental (a brand name of M/s. Star Dental Centre Private Limited)
                </p>
            </div>
        </div>
  )
}

export default Footer