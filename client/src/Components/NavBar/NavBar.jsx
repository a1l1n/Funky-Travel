import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../NavBar/HenryLogo.png';
import Style from '../NavBar/NavBar.module.css';
import { SearchBar } from '../SeachBar/SearchBar';

export default function NavBar() {
return (
    <div className={Style.navbar}>
        <div className={Style.leftSide}>
            <img src={Logo} />
        </div>
        <div>
            <SearchBar />
        </div>
        <div className={Style.rightSide}>
            <Link to='/countries'> Home </Link>
            <Link to='/activities'> New Activity </Link>
            {/* <Link to='About'> About </Link> */}
        </div>
    </div>
)
};

/* 'rightSide' */