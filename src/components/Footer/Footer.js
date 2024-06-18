import React from "react";
import "./footer.css"
import instagram from "./instagram.png";
import facebook from "./facebook.png";

export default function Footer() {
    return(
        <div className="Footer">
            <div>
                <ul className="SocialMenu">
                    <li><a href="https://www.instagram.com/morelconstruction974/?hl=fr"><img src={instagram} alt="instagram"width={35}/></a></li>
                    <li><a href="https://www.facebook.com/MorelConstruction"><img src={facebook} alt="facebook" width={35}/></a></li>
                </ul>
            </div>
            <ul className="menuFooter">
                <li hidden>Plans de maison</li>
                <li hidden>Témoignages / Avis clients</li>
                <li hidden>Blog / Actualités</li>
                <li>Partenaires et certifications</li>
                <li>Mentions légales et Politique de confidentialité</li>
                <li>FAQ</li>
            </ul>
            <div>
                <h4>Copyright © 2024 morel-construction.</h4>
            </div>
        </div>
    )
}