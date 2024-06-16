import React from "react";
import "./footer.css"

export default function Footer() {
    return(
        <div className="Footer">
            <div>
                <ul className="SocialMenu">
                    <li>instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <ul className="menuFooter">
                <li hidden>Plans de maison</li>
                <li hidden>Témoignages / Avis clients</li>
                <li>Blog / Actualités</li>
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