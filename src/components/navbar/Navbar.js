import React from "react";
import 'animate.css';
import "./navbar.css";
import Sectionlist from "./Sectionlist";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {

    return <div className="navbar">
        <div className="left-navbar">
            <img src="https://img.freepik.com/premium-vector/vector-pin-photo-camera-logo-design-concept-illustration-idea_606011-2407.jpg?w=996" width={150} alt="logo"/>
        </div>
        <div className="right-navbar">
            <div className="menu">
               <Sectionlist/>
            </div>
            <MobileNavbar/>
        </div>
    </div>
}
