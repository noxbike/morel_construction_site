import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return <div className="navbar">
        <div className="left-navbar">
            <img src="https://img.freepik.com/premium-vector/vector-pin-photo-camera-logo-design-concept-illustration-idea_606011-2407.jpg?w=996" width={150} alt="logo"/>
        </div>
        <div className="right-navbar">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
                <li><Link to="/services">Nos services</Link></li>
                <li><Link to="/realisation">Réalisations</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/devis">Devis</Link></li>
            </ul>
        </div>
    </div>
}