import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, createNewActivity } from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';
import Style from "./NewActivity.module.css";
import Swal from 'sweetalert2';
import Calendar from './Calendar';

export const NewActivity = () => {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    date: "",
    countries: []
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
        countries: [e.target.value]
      })
  };

  // Checkbox handler ------------------------------------------------
  const handleCheckBox = (e) =>{
   /*  e.preventDefault(); */
   setInput({
     ...input,
     [e.target.name]: e.target.value
    })
  };
    
  // Handle Submit ---------------------------------------------------
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewActivity(input));
    Swal.fire('Your activity has been successfully created!')
    setInput({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      date: "",
      countries: []})
    };
    /* history.push('/countries')
 */
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
                  <label form="name">Activity: </label>
                  <input onChange={handleOnChange} 
                  type="text" 
                  name="name" 
                  value={input.name}
                  placeholder='Add an activity'
                  />
                </div>

                <div className={Style.actDificulty}>
                  <label form="dificulty">Dificulty: </label>
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

      {/* AVERIGUAR CÓMO AGREGAR NUMEROS DE TIPO HORARIO ------------------------------------------------------------------------------- */}
                <div className={Style.actDuration}>
                  <label form='duration'>Duration: </label>
                  <input onChange={handleOnChange} 
                  type="number" 
                  name="duration" 
                  value={input.duration}
                  />
                </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
                <div className={Style.actSeason}>
                  <label form='season'>Season: </label>
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

      {/*  FALTA AGREGAR COSAS ACÁ --------------------------------------------------------------------------------------------------------------- */}
              <div className={Style.actCountry}>
                <label form='country'>Country: </label>
                <input onChange={e => handleSelect(e)} type="text" name="country"/>
              </div>

      {/*   CALENDAR ----------------------------------------------------------------------------------------------------------------------------- */}
                <div className={Style.actCalendar}>
                  <Calendar />
                </div>

      {/*   SUBMIT BUTTON ------------------------------------------------------------------------------------------------------------------------ */}

                <div className={Style.actButton}>
                  <button  type="submit">
                    Create Activity
                  </button>
                </div>
            
              </form>
            </div>
            <div className={Style.actRight}>

            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

/* 
Date Range with disabled navigation shown
() => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      showDisabledMonthNavigation
    />
  );
};
*/