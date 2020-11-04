import React from 'react';
import { Link } from 'react-router-dom'


function navItem() {

    let navLink = []
    if (localStorage.getItem('userId')) {
        navLink = [
            { path: "/find", name: "More Details" },
            { path: "/origin", name: "Origin" }
        ]
    }
    return (
        <ul className="navigation">
            {navLink.map((item, index) => (
                <Link key={index} className="navLink" to={item.path}>{item.name}</Link>
            ))}
            {  localStorage.getItem('userId') ?
                <Link onClick={() => localStorage.removeItem('userId')} className="navLink" to="/">Logout</Link>
                : <Link className="navLink" to="/auth">Sign In</Link>
            }

        </ul>
    )
}

export default navItem
