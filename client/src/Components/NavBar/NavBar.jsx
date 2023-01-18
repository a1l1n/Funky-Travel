import React from 'react';
import Style from '../NavBar/NavBar.module.css';
import { ModalNavigation } from './ModalNavigation';
import { Navigation } from "./Navigation";

export default function NavBar() {
return (
    <div className={Style.navbar}>
        <Navigation />
        <ModalNavigation />
    </div>
)
};
