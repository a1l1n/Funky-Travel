import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, createNewActivity } from '../../Redux/Actions';
import { useHistory } from 'react-router-dom';
import Style from "./NewActivity.module.css";
import Swal from 'sweetalert2';

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
                  <div className={Style.actLabel}>
                    <label form="name">Activity: </label>
                  </div>
                  <input onChange={handleOnChange} 
                  type="text" 
                  name="name" 
                  value={input.name}
                  placeholder='Add an activity'
                  className={Style.actInput}
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

      {/* AVERIGUAR CÓMO AGREGAR NUMEROS DE TIPO HORARIO ------------------------------------------------------------------------------- */}
                <div className={Style.actDuration}>
                  <div className={Style.actLabel}>
                    <label form='duration'>Duration: </label>
                  </div>
                  <input onChange={handleOnChange} 
                  type="time" 
                  name="duration" 
                  value={input.duration}
                  className={Style.actTime}
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

      {/*  FALTA AGREGAR COSAS ACÁ --------------------------------------------------------------------------------------------------------------- */}
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
                <input type="date" name="date" min="21/12/2022" className={Style.actDate}/>
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

/* 
                <div className={Style.actCalendar}>
                  <Calendar />
                </div>
*/