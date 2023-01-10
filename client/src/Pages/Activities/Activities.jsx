import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity, updateActivity, deleteActivity } from '../../Redux/Actions';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Styles from "./Activities.module.css";
/*
  Fecha en verde si está proyectada
  Fecha en gris si ya pasó

  PA MAÑANA:
  1) EDIT -> BACK Y FRONT
  2) EMPEZAR CON LOS FILTROS DE ACTIVIDADES
*/

export default function Activities () {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);

  let today = new Date()
/*   console.log("Esto es today: ", today) */

  const handleDelete = async (id) => {
    dispatch(deleteActivity(id));
  
  }

  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch])
  

  return (
    <section className={Styles.activities_container}>
      <div className={Styles.activities_order_buttons}>
        <button>Activity A to Z</button>
        <button>Country A to Z</button>
        <button>Date Asc.</button>
        <button>Dificulty Asc</button>
        <button>Season</button>
      </div>
      
      <div className={Styles.activities_shortCard_container}>
          {
            activities.length === 0 ?
            <span className={Styles.activities_no_act}>
              <h3>No activities yet</h3>
            </span>
            : activities.map((act) => (
              <div key={act.id} className={Styles.activities_shortCardContainer}>
                <div className={Styles.activities_shortCard}>
                  <div className={Styles.activities_title}>
                    <span>{act.name}</span>
                    <img src={act.countries[0]?.flagimg}/>
                  </div>
                  <div className={Styles.activities_text}><h3>Country: </h3><p>{act.countries[0].name}</p></div>
                  <div className={Styles.activities_text}><h3>Date: </h3><p>{act.date}</p></div>
                  <div className={Styles.activities_text}><h3>Dificulty: </h3><p>{act.dificulty}</p></div>
                  <div className={Styles.activities_text}><h3>Duration: </h3><p>{act.duration}</p></div>
                  <div className={Styles.activities_text}><h3>Season: </h3><p>{act.season}</p></div>
                  <div className={Styles.activities_buttons}>
                    <button onClick={() => handleDelete(act.id)} className={Styles.activities_delete_icon}><AiOutlineDelete /></button>
                    <button /* onClick={() => handleUpdate()} */ className={Styles.activities_edit_icon}><AiOutlineEdit /></button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    

    </section>
  )
}

