import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from "react-icons/si";
import Style from "./NavBar.module.css";

export const Navigation = () => {
  return (
    <nav className={Style.navigation}>
        <div className={Style.navbarText}>
            <SiYourtraveldottv className={Style.navbarIcon}/>
            <h2>Funky Travel</h2>
        </div>
        <div className={Style.rightSide}>
            <Link className={Style.navBar_link} to='/countries'> Countries </Link>
            <Link className={Style.navBar_link} to="/activities">Your Activities</Link>
            <Link className={Style.navBar_link} to='/newActivity'> Create Activity </Link>
            <Link className={Style.navBar_link} to='About'> About </Link> 
        </div> 
    </nav>
  )
}
