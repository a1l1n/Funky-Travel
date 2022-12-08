import React, { useEffect, useState } from 'react';

// Agregar un botón para que vaya a los detalles -> CARD

export const Cards = ({ name, capital, continent, flagimg }) => {
    return (
      <div className='card'>
      <img src={flagimg}/>
      <p>{name}</p>
      <p>{capital}</p>
      <p>{continent}</p>
      </div>
    )
  };
  