import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../NavBar/NavBar.module.css';
import { SiYourtraveldottv } from "react-icons/si"

export default function NavBar() {
return (

    <div className={Style.navbar}>
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
    </div>
)
};
