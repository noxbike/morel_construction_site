import React from "react"
import Accueil from "../components/accueil/Accueil"
import APropos from "../components/a-propos/APropos"
import NosService from "../components/nos-services/NosServices"
import Realisation from "../components/réalisation/Realisation"
import Contact from "../components/contact/Contact"
import Devis from "../components/devis/Devis"
import Notfound from "../components/notfound/Notfound"

export let routelist = [
    {
        name:"Accueil",
        path: "/",
        element: <Accueil/>
    },
    {
        name:"A propos",
        path: "/a-propos",
        element: <APropos/>
    },
    {
        name:"Nos services",
        path: "/services",
        element:<NosService/>
    },
    {
        name:"Réalisation",
        path: "/realisation",
        element:<Realisation/>
    },
    {
        name: "Contact",
        path: "/contact",
        element:<Contact/>
    },
    {
        name:"Devis",
        path: "/devis",
        element:<Devis/>
    },
    {
        path: "/*",
        element: <Notfound/>
    }
]