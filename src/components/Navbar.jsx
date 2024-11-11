import React, {useState} from 'react'
import logo from "../assets/clove logo.png";
import hamburger from "../assets/hamburger.png";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import callBack from "../assets/Get a Call Back.png";
import bookApp from "../assets/Book an appointment.png";
import Frame52519 from "../assets/Frame 52519.png";

function Navbar() {
    const [navOptionsFlag, setNavOptionsFlag] = useState(false);

    const onHamburgerClickFunc = ()=>{
        setNavOptionsFlag(!navOptionsFlag)
    }

    return (
        <div className="navbarContainer">
            <div className="navbarLogo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbarOptions">
                <div className="navbarHamberber">
                    <img onClick={onHamburgerClickFunc} src={hamburger} />
                </div>
                {navOptionsFlag && <ul className="navbarListItemsForMobile">
                    <li className="navbarListItem">Treatment <img src={Vector} /></li>
                    <li className="navbarListItem">Dental Plans <img src={Vector} /></li>
                    <li className="navbarListItem">Our Doctors</li>
                    <li className="navbarListItem">Careers</li>
                    <li className="navbarListItem">Find a Clinic</li>

                    <button className="navbarCallBtnMobile"><img src={callBack} />Help ? <img
                        src={Vector2} /></button>
                </ul>}
                <ul className="navbarListItems">
                    <li className="navbarListItem">Treatment <img src={Vector} /></li>
                    <li className="navbarListItem">|</li>
                    <li className="navbarListItem">Dental Plans <img src={Vector} /></li>
                    <li className="navbarListItem">|</li>
                    <li className="navbarListItem">Our Doctors</li>
                    <li className="navbarListItem">|</li>
                    <li className="navbarListItem">Careers</li>
                    <li className="navbarListItem">|</li>
                    <li className="navbarListItem">Find a Clinic</li>
                </ul>
                <div className="navbarOptionsBtns">
                    <button className="navbarBookAptBtn"><img src={bookApp} /> Book
                        Appointment</button>
                    <button className="navbarCallBtn"><img src={callBack} />Help ? <img
                        src={Vector2} /></button>

                    <div className="navbarHelpBox">
                        <img src={Frame52519} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar