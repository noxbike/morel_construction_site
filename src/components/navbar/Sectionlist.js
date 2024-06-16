import React from 'react';
import { routelist } from '../../Data/routelist';
import { Link } from 'react-router-dom';

export default function Sectionlist({setOpen}) {
    return (
        <ul>
            { routelist.map(route => route.name &&
                <li key={route.name}>
                    <Link onClick={() => setOpen(false)} to={route.path}>{route.name}</Link>
                </li>
            )}
        </ul>
    )
}