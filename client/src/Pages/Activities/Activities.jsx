import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity, updateActivity, deleteActivity } from '../../Redux/Actions';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import Styles from "./Activities.module.css";
import ActivityFilters from '../../Components/Filters/ActivityFilters';
import { Edit } from './Edit';
/*
  Fecha en verde si está proyectada
  Fecha en gris si ya pasó
*/

export default function Activities () {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);
  const filtereds = useSelector(state => state.filteredActivities);
  const [ list, setList ] = useState(activities);
  const [ update, setUpdate ] = useState(-1)

  let today = new Date()

  /* Update ------------------------------------------------------------------- */
  const handleUpdate = async (id) => {
    setUpdate(id)
  }

  /* Delete ------------------------------------------------------------------- */

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this activity?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(deleteActivity(id));
        Swal.fire("Activity deleted");
        return list;
      }
    })
  }
  
  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch])
  

  return (
    <div className={Styles.activities_container}>
      <ActivityFilters />

      <div className={Styles.activities_shortCard_container}>
           {
            activities.length === 0 ?
             <div className={Styles.activities_no_act}>
               <div className={Styles.activities_no_act_h3}><h3>No activities yet</h3></div>
             </div>
            : filtereds.lenght > 0 ?
              filtereds?.map((act) =>(
            <div key={act.id} className={Styles.activities_shortCardContainer}>
            <div className={Styles.activities_shortCard}>
              <div className={Styles.activities_title}>
                <span>{act.name}</span>
                <img src={act.countries[0]?.flagimg}/>
              </div>
              <div className={Styles.activities_text}><h3>Date: </h3><p>{act.date}</p></div>
              <div className={Styles.activities_text}><h3>Country: </h3><p>{act.countries[0].name}</p></div>
              <div className={Styles.activities_text}><h3>Season: </h3><p>{act.season}</p></div>
              <div className={Styles.activities_text}><h3>Duration: </h3><p>{act.duration}</p></div>
              <div className={Styles.activities_text}><h3>Difficulty: </h3><p>{act.dificulty}</p></div>
              <div className={Styles.activities_buttons}>
                <button onClick={() => handleDelete(act.id)} className={Styles.activities_delete_icon}><AiOutlineDelete /></button>
                <button className={Styles.activities_edit_icon}><AiOutlineEdit /></button>
              </div>
            </div>
          </div>
          ))
            : activities.map((act) => (
              <div key={act.id} className={Styles.activities_shortCardContainer}>
                <div className={Styles.activities_shortCard}>
                  <div className={Styles.activities_title}>
                    <span>{act.name}</span>
                    <img src={act.countries[0]?.flagimg}/>
                  </div>
                  <div className={Styles.activities_text}><h3>Date: </h3><p>{act.date}</p></div>
                  <div className={Styles.activities_text}><h3>Country: </h3><p>{act.countries[0].name}</p></div>
                  <div className={Styles.activities_text}><h3>Season: </h3><p>{act.season}</p></div>
                  <div className={Styles.activities_text}><h3>Duration: </h3><p>{act.duration}</p></div>
                  <div className={Styles.activities_text}><h3>Difficulty: </h3><p>{act.dificulty}</p></div>
                  <div className={Styles.activities_buttons}>
                    <button onClick={() => handleDelete(act.id)} className={Styles.activities_delete_icon}><AiOutlineDelete /></button>
{/*                     <button onClick={() => handleUpdate(act.id)} className={Styles.activities_edit_icon}><AiOutlineEdit /></button> */}
                  </div>
                </div>
              </div>
            ))     
          } 
      </div>

{/*       <Edit activity={act} activities={activities} setList={setList}/> */}

    </div>
  )
}
