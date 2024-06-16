import React from "react";
import { useState } from "react";
import Sectionlist from "./Sectionlist";

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="Mobilemenu">
            <p className={!open?"openButton":'openButton hide'} onClick={() => setOpen(true)}>open</p>
            <div className={open ?'Menu animate__animated animate__fadeInRight':'hide'}>
                <p className="closeButton" onClick={() => setOpen(false)}>x</p>
                <Sectionlist setOpen={setOpen}/>
            </div>
        </div>
    )
}