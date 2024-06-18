import React from "react";
import { useState } from "react";
import 'animate.css';
import "./navbar.css";
import Sectionlist from "./Sectionlist";
import MobileNavbar from "./MobileNavbar";
import logo from './logo.png'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return <div className="navbar">
        <div className="left-navbar">
            <img src={logo} width={150} alt="logo"/>
        </div>
        <div className="right-navbar">
            <div className="menu">
               <Sectionlist setOpen={setOpen}/>
            </div>
            <MobileNavbar/>
        </div>
    </div>
}
