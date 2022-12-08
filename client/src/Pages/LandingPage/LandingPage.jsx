import React from 'react'
import { Link } from 'react-router-dom';
import Style from './LandingPage.module.css';
import image from "./LP-Img.jpeg";

export const LandingPage = () => {
  return (
    <div className={Style.landingContainer}> 
        <div className={Style.landingTextContainer}>
          <div className={Style.landingFunky}><h1>Funky Travel</h1></div>
          <div className={Style.landingWorld}><h1>All the World & All yours Adventures</h1></div>
          <div className={Style.landingPlace}><h1>In One Place</h1></div>
        </div>
        
        <div className={Style.landingImgContainer}>
            <img src={image} alt=""/> 
            <div className={Style.landingImgText}>
              <Link to='countries' style={{ textDecoration: 'none' }}> 
                <h2>Get</h2>
                <h2>Started!</h2>
              </Link>
            </div>
        </div>
    </div>
  )
}
