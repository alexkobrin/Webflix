import React from 'react'
import NavLink from '../navItems/navItem';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom'
function header() {
    return (
        <div className="container-fluid">
            <div className="header__inner">
                <div className="header-logo">
                    <div className="logo">
                       <Link to="/" ><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="header-nav">
                    <NavLink />
                </div>
            </div>
     </div>
  )   
}

export default header
