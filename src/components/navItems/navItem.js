import React from 'react';
import { NavLink } from 'react-router-dom'

function navItem() {

    let navLink = []
    if (localStorage.getItem('userId')) {
        navLink = [
            { path: "/find", name: "More Details" },
            { path: "/slider", name: "Slider" }
        ]
    }
    return (
        <ul className="navigation">
            {navLink.map((item, index) => (
                <NavLink key={index} className="navLink" to={item.path}>{item.name}</NavLink>
            ))}
            {  localStorage.getItem('userId') ?
                <NavLink onClick={() => localStorage.removeItem('userId')} className="navLink" to="/">Logout</NavLink>
                : <NavLink className="navLink" to="/auth">Sign In</NavLink>
            }

        </ul>
    )
}

export default navItem
