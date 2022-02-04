import React from "react";
import {CgProfile} from 'react-icons/cg';
import {TiMessages} from 'react-icons/ti';
import {CgMusic} from 'react-icons/cg';
import {TiNews} from 'react-icons/ti';
import {IoSettingsOutline} from 'react-icons/io5';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    return (
    <div className="navbar">
        <div className="nav__item"><NavLink className="nav__link" to="/profile"><i><CgProfile/></i> Profile</NavLink></div>
        <div className="nav__item"><NavLink className="nav__link" to="/dialogs"><i><TiMessages/></i> Messages</NavLink></div>
        <div className="nav__item"><NavLink className="nav__link" to="/music"><i><CgMusic/></i>Music</NavLink></div>
        <div className="nav__item"><NavLink className="nav__link" to="/news"><i><TiNews/></i>News</NavLink></div>
        <div className="nav__item"><NavLink className="nav__link" to="/settings"><i><IoSettingsOutline/></i>Settings</NavLink></div>
    </div>
    );
}
export default Navbar;