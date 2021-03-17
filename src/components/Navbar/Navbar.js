import React from 'react'
import s from '../Navbar/Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className ={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/dialogs"}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </div>
}

export default Navbar;