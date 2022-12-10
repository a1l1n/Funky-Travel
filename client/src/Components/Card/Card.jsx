import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

// Acá viene importada toda la información de country + la info traída por actividades

export const Card = () => {
  return (
    <div>Card</div>
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
