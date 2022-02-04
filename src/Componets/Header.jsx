import React from "react";
import {FaSearch} from 'react-icons/fa';
import {MdSupervisorAccount} from 'react-icons/md';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__logo">
            <img src="https://img2.freepng.ru/20180426/zwq/kisspng-hewlett-packard-logo-hewlett-packard-enterprise-hp-laptop-5ae168d447ca66.8372165515247218762941.jpg" alt="logo" />
            </div>
            <div className="header__search">
            <button className="header__btn"><FaSearch/></button>
            <input type="search" name="" id=""  placeholder="Search"  />
            <div className="reg">
                <i><MdSupervisorAccount/></i> <button>login</button>
            </div>
            
            
            </div>

        </div>
    )
}
export default Header
