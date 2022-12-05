import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Style from './LandingPage.module.css';
import image from "./LP-Img.jpeg";

export const LandingPage = () => {
  return (
    <div className={Style.landingContainer}> 
        <div className={Style.landingTextContainer}>
          <h1>Funky Travel</h1>
          <h1>All the World & All yours Adventures</h1>
          <h1>In One Place</h1>
        </div>
        <div className={Style.landingImgContainer}></div>
        <button className={Style.button}>
        <Link to='countries'>Home</Link>
        </button>
    </div>
  )
}
