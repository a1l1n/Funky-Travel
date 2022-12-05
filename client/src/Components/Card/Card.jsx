import React from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

/* BUSCAR QUÉ HACE:
1) useState: "es un hook que permite añadir un estado local a los componentes de función de React"
2) useEffect: "equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados en lo que se refiere al ciclo de vida de las clases de React y sus métodos."
3) useDispatch:
4) useSelector:
5) Thunk: 

BUSCAR CÓMO SE HACE
6) dar estilos a los componentes
7) agregar fuentes a los componentes
8) agregar animaciones
*/

// Acá viene importada toda la información de country + la info traída por actividades

export const Card = ({ flagimg, id, name, capital, subregion, continent, area, population }) => {
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
