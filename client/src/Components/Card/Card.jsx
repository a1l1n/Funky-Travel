import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Styles from "./Card.module.css";

// Acá viene importada toda la información de country + la info traída por actividades
// HAY QUE AGREGAR UN LINK HACIA EL HOME

export const Card = ({ id }) => {
  const country = useSelector(state => state.countryDetail);
  console.log("Esto es coutry: ", country)

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
              <h2>Activities: </h2>
              <div  className={Styles.cardActivitiesContainer}>
                {
                  country.activities?.length === 0 ? 
                  <div className={Styles.cardNoActivities}>
                    <h3>No activities yet</h3> 
                    <Link to="/newActivity" style={{ textDecoration: 'none' }}>
                      + New Activity
                    </Link> 
                  </div> 
                  : country.activities?.map((act) => (
                    <div className={Styles.cardActivitiesText}>
                      <span><h3>Activity: </h3>{act.name}</span>
                      <span><h3>Duration (hr): </h3>{act.duration}</span>
                      <span><h3>Dificulty: </h3>{act.dificulty}</span>
                      <span><h3>Season: </h3>{act.season}</span>
                    </div>
                  ))           
                }  
              </div> 
            </div>
          </div>
      </div>
    </div>
  )
}
