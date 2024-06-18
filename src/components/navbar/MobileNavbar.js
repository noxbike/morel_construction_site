import React from "react";
import { useState } from "react";
import Sectionlist from "./Sectionlist";
import traverser from "./traverser.png";
import menuBurger from "./menu-burger.png";

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="Mobilemenu">
            <img src={menuBurger} className={!open?"openButton":'openButton hide'} onClick={() => setOpen(true)} width={25} alt="openMenu"/>
            <div className={open ?'Menu animate__animated animate__fadeInRight':'hide'}>
                <img src={traverser} className="closeButton" onClick={() => setOpen(false)} width={25} alt="closeMenu"/>
                <Sectionlist setOpen={setOpen}/>
            </div>
        </div>
    )
}