import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCountries, createNewActivity } from '../../Redux/Actions';
import Style from "./NewActivity.module.css";
import Swal from 'sweetalert2';

export const NewActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector(state => state.countries);
  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    date: "",
    countryName: ""
  });
  

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // Countries list -------------------------------------------------
  const handleSelect = (e) =>{
    e.preventDefault();
      setInput({
        ...input,
        countryName: e.target.value
      })
  };

  // Checkbox handler ------------------------------------------------
  const handleCheckBox = (e) =>{
   const { name, value } = e.target;
   e.preventDefault(); 
   setInput({
     ...input,
     [name]: value
    })
  };
    
  // Handle Submit ---------------------------------------------------
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    /* Check if the country really exist ---------------------------- */
    let countryCheck = countries.find(c => c.name.toLowerCase() === input.countryName.toLocaleLowerCase());
    if (!countryCheck) return Swal.fire("A valid country is required")
    
    /* Check if it's a valid date ------------------------------------ */


    /* Dispatch action ----------------------------------------------- */
    dispatch(createNewActivity(input));
    Swal.fire('Your activity has been successfully created!')
    setInput({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      date: "",
      countryName: ""})
      navigate("/countries");
    };

  useEffect(() =>{
    dispatch(getAllCountries())
  }, []);
  
  
  return (
    <div className={Style.actBody}>
      
        <div className={Style.actContainer}>
            <div className={Style.actLeft}>
              <div><h1> Create a new Activity</h1><div>
              <form onSubmit={ (e) => handleOnSubmit(e)}>
                <div className={Style.actActivity}>
                  <div className={Style.actLabel}>
                    <label form="name">Activity: </label>
                  </div>
                  <input onChange={handleOnChange} 
                  type="text" 
                  name="name" 
                  value={input.name}
                  placeholder='Add an activity'
                  className={Style.actInput}
                  required
                  />
                </div>

                <div className={Style.actDificulty}>
                  <div className={Style.actLabel}>
                    <label form="dificulty">Dificulty: </label>
                  </div>
                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name='dificulty' value='1'/>
                  1 </label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name='dificulty' value='2'/>
                  2 </label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name='dificulty' value='3'/>
                  3 </label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name='dificulty' value='4'/>
                  4 </label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name='dificulty' value='5'/>
                  5 </label>
                </div>

      {/* AVERIGUAR C??MO AGREGAR NUMEROS DE TIPO HORARIO ------------------------------------------------------------------------------- */}
                <div className={Style.actDuration}>
                  <div className={Style.actLabel}>
                    <label form='duration'>Duration: </label>
                  </div>
                  <input onChange={handleOnChange} 
                  type="time" 
                  name="duration" 
                  value={input.duration}
                  className={Style.actTime}
                  required
                  />
                </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
                <div className={Style.actSeason}>
                  <div className={Style.actLabel}>
                    <label form='season'>Season: </label>
                  </div>
                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name="season" value='Summer'/>
                  Summer</label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name="season" value='Fall'/>
                  Fall</label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name="season" value='Winter'/>
                  Winter</label>

                  <label>
                  <input onChange={e => handleCheckBox(e)} type="radio" name="season" value='Spring'/>
                  Spring</label>
                </div>

      {/*  FALTA AGREGAR COSAS AC?? --------------------------------------------------------------------------------------------------------------- */}
              <div className={Style.actCountry}>
                <div className={Style.actLabel}>
                  <label form='country'>Country: </label>
                </div>
                <input onChange={e => handleSelect(e)} type="text" name="country" className={Style.actInput}/>
              </div>

      {/*   CALENDAR ----------------------------------------------------------------------------------------------------------------------------- */}
              <div className={Style.actCalendar}>
                <div className={Style.actLabel}>
                  <label>Pick a Date: </label>
                </div>
                <input  onChange={handleOnChange} 
                type="date" 
                name="date" 
                className={Style.actDate}
                required/>
              </div>

      {/*   SUBMIT BUTTON ------------------------------------------------------------------------------------------------------------------------ */}

                <div className={Style.actButtonDiv}>
                  <button type="submit" className={Style.actButton}>
                    <span>Create Activity</span>
                  </button>
                </div>
            
              </form>
            </div>
        </div>
        </div>
        <div className={Style.actRight}>
          
        </div>
      </div>
    </div>
  )
}
