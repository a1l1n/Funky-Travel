import React from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Cards.module.css";

// Agregar un botón para que vaya a los detalles -> CARD

export const Cards = ({ name, continent, flagimg, id }) => {
    return (
      <div className={Styles.cardsContainer}>
        <Link to={`/countries/${id}`}  style={{ textDecoration: 'none' }}>
          <img className={Styles.cardsImage} src={flagimg}/>
          <div className={Styles.cardsText}>
            <h3 className={Styles.cardsContinent}>{continent}</h3>
            <h3>{name}</h3>
          </div>
        </Link>
      </div>
    )
  };
  