import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Styles from "./Card.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

export const Card = ({ id }) => {
  const country = useSelector(state => state.countryDetail);

  return (
    <div className={Styles.cardBody}>
      <div className={Styles.cardContainer}>
        <div className={Styles.cardTopHalf}>
          <div className={Styles.cardText}>
            
            <div className={Styles.cardInfo}>
              <div className={Styles.cardInformationImage}>
                <div className={Styles.cardInformationTitle}>
                  <h2>{country.name}</h2>
                  <h3>Country Information</h3>
                </div>
                <img src={country.flagimg}/>
              </div>
              
              <div className={Styles.cardInformationSpans}>
                <span><div className={Styles.cardInfoDiv}><h3>Capital</h3></div>{country.capital}</span>
                <span><div className={Styles.cardInfoDiv}><h3>Continent </h3></div>{country.continent}</span> 
                <span><div className={Styles.cardInfoDiv}><h3>Subregion</h3></div>{country.subregion}</span> 
                <span><div className={Styles.cardInfoDiv}><h3>Area (km2)</h3></div>{country.area?.toLocaleString()}</span> 
                <span><div className={Styles.cardInfoDiv}><h3>Population</h3></div>{country.population?.toLocaleString()}</span>
              </div>
              <a className={Styles.cardInfoLink} href={`https://en.wikipedia.org/wiki/${country.name}`} target="_blank"><AiOutlinePlusCircle className={Styles.cardIcon}/> Info</a>
            </div>
          </div>

          <div className={Styles.cardLinks}>
            <Link className={Styles.cardBackLink} to="/countries"><IoIosArrowBack />Go back</Link>
          </div>
        </div>

          <div className={Styles.cardRigth}>
            <div className={Styles.cardActivities}>
              <h2>Activities </h2>
              <div  className={Styles.cardActivitiesContainer}>
                {
                  country.activities?.length === 0 ? 
                  <div className={Styles.cardNoActivities}>
                    <h3>No activities yet</h3> 
                    <Link to="/newActivity" className={Styles.cardNoActivitiesLink}>
                      <AiOutlinePlusCircle /> New Activity
                    </Link> 
                  </div> 
                  : country.activities?.map((act) => (
                    <div className={Styles.cardActivitiesText}>
                      <span><h3>{act.name}</h3></span>
                      <Link to="/activities" className={Styles.cardActLink}><AiOutlinePlusCircle className={Styles.cardIcon}/> Info</Link>
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
