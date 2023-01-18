import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from "react-icons/si"
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Style from "./NavBar.module.css";
/* import { NavLink } from 'react-router-dom'; */

export const ModalNavigation = () => {
    const [ modal, setModal ] = useState(false);


  return (
    <nav className={Style.modal_navigation}>
        <div className={Style.modalText}>
            <SiYourtraveldottv className={Style.modalIcon}/>
            <h2>Funky Travel</h2>
        </div>
        { modal && 
            <div className={Style.modal_rightSide_container}>
                <div className={Style.modal_rightSide}>
                    <Link className={Style.navBar_link} to='/countries'> Countries </Link>
                    <Link className={Style.navBar_link} to="/activities">Your Activities</Link>
                    <Link className={Style.navBar_link} to='/newActivity'> Create Activity </Link>
                    <Link className={Style.navBar_link} to='About'> About </Link> 
                </div>   
            </div>
        }
        <div className={Style.modalIcon_menu}>
            { modal ? 
            <AiOutlineClose className={Style.modalIcon_menu_icon} onClick={() => setModal(!modal)}/> 
            : <HiMenu className={Style.modalIcon_menu_icon} onClick={() => setModal(!modal)} /> 
            }
        </div>
    </nav>
  )
}
