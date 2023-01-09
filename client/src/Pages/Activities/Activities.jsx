import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity } from '../../Redux/Actions';
import Styles from "./Activities.module.css";

/* Card mini con 
  Actividad, 
  Fecha, 
  País (nombre)
  MODULE -> toda la info + bandera

  Fecha en verde si está proyectada
  Fecha en gris si ya pasó
*/

export default function Activities () {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);
  console.log(activities)

  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch])
  

  return (
    <section className={Styles.activities_container}>
      
      <div className={Styles.activities_shortCard_container}>
          {
            activities.length === 0 ?
            <span className={Styles.activities_no_act}>
              <h3>No activities yet</h3>
            </span>
            : activities.map((act) => (
                <span className={Styles.activities_shortCard}>
                  <h3>{act.countries[0].name}</h3>
                  <div className={Styles.activities_text}><h3>Activity: </h3><p>{act.name}</p></div>
                  <div className={Styles.activities_text}><h3>Date: </h3><p>{act.date}</p></div>
                  <div className={Styles.activities_text}><h3>Dificulty: </h3><p>{act.dificulty}</p></div>
                  <div className={Styles.activities_text}><h3>Duration: </h3><p>{act.duration}</p></div>
                  <div className={Styles.activities_text}><h3>Season: </h3><p>{act.season}</p></div>
                </span>
            ))
          }
        </div>
    

    </section>
  )
}

