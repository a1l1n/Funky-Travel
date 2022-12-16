import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";
import Styles from "./Card.module.css";
import Image from "../../Pages/LandingPage/LP-Img.jpeg";

// Acá viene importada toda la información de country + la info traída por actividades

export const Card = ({ id }) => {
  const country = useSelector(state => state.countryDetail);
  console.log("Esto es country: ", country)
  

  return (
    <div className={Styles.cardBody}>
      <div className={Styles.cardContainer}>
        <div className={Styles.cardTopHalf}>
              <h2>Country Information</h2>
          <div className={Styles.cardText}>
            <div className={Styles.cardsTitleImage}>
              <div className={Styles.cardInformationImage}><img src={country.flagimg}/></div>
            </div>
            <div className={Styles.cardLeftInfo}>
              <span><h3>Name </h3>{country.name}</span>
              <span><h3>Capital </h3>{country.capital}</span>
              <span><h3>Continent </h3>{country.continent}</span> 
            </div>
            <div className={Styles.cardRightInfo}>
              <span><h3>Subregion</h3>{country.subregion}</span> 
              <span><h3>Area (km2)</h3>{country.area}</span> 
              <span><h3>Population</h3>{country.population}</span>
            </div>
          </div>
        </div>

          <div className={Styles.cardBottomHalf}>
            <div className={Styles.cardActivities}>
              <h2>Activities</h2>
              <div>
                {
                  country.activities?.lenght === 0 ? country.activities.map((a) => {
                    return (
                      <h3>{a}</h3>
                    )})
                  : <div><h3>No activities yet</h3> <button>+ New Activity</button> </div>
                } 
                
              </div> 
            </div>
          </div>
      
      </div>
    </div>
  )
}


/* 
          id: e.cca3,                  //OBJETO de la API : cca3: código
          name: e.name.common,
          continent: e.continents,
          capital: e.capital, 
          subregion: e.subregion,
          area: e.area,
          population: e.population, // ARGENTINA info filtrada de la API ---> GUARDAR info en la db
          flagimg: e.flags.png,
 */
