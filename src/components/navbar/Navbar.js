import React from "react";
import "./navbar.css";

export default function Navbar() {
    return <div className="navbar">
        <div className="left-navbar">
            <img src="https://img.freepik.com/premium-vector/vector-pin-photo-camera-logo-design-concept-illustration-idea_606011-2407.jpg?w=996" width={150}/>
        </div>
        <div className="right-navbar">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Nos services</a></li>
                <li><a href="#">Réalisations</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Devis</a></li>
            </ul>
        </div>

    </div>
}