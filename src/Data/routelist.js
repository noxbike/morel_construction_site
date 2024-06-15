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
        path: "/",
        element: <Accueil/>
    },
    {
        path: "/a-propos",
        element: <APropos/>
    },
    {
        path: "/services",
        element:<NosService/>
    },
    {
        path: "/realisation",
        element:<Realisation/>
    },
    {
        path: "/contact",
        element:<Contact/>
    },
    {
        path: "/devis",
        element:<Devis/>
    },
    {
        path: "/*",
        element: <Notfound/>
    }
]