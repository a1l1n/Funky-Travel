import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../NavBar/NavBar.module.css';
import { SearchBar } from '../SeachBar/SearchBar';
import { SiYourtraveldottv } from "react-icons/si"

export default function NavBar() {
return (
    <div className={Style.navbar}>
        <div className={Style.navbarText}>
            <SiYourtraveldottv className={Style.navbarIcon}/>
            <h2>Funky Travel</h2>
        </div>
        <div>
            <SearchBar />
        </div>
        <div className={Style.rightSide}>
            <Link to='/countries'> Countries </Link>
            <Link to="/activities">Your Activities</Link>
            <Link to='/newActivity'> New Activity </Link>
            {/* <Link to='About'> About </Link> */}
        </div>
    </div>
)
};
