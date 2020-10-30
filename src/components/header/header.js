import React from 'react'
import NavLink from '../navItems/navItem';
import logo from '../../assets/logo.svg';
function header() {
    return (
        <div className="container-fluid">
            <div className="header__inner">
                <div className="header-logo">
                    <div className="logo">
                        <img src={logo} alt="" />
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
