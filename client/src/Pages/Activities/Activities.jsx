import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries, createNewActivity } from '../../Redux/Actions';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';

// Acá entra el formulario con las opciones en "Dificulty", "Season" y filtro para países
/* 
COSAS QUE ME FALTAN TERMINAR DE HACER
1) FILTROS -> 
2) FORMULARIO ------------------> en proceso
3) PAGINADO  -------------------> listo!
4) CARD -> DETALLE
5) CARDS -> DETALLES
6) CSS
7) Loading & 404 Error page *fuck*
*/

export const Activities = () => {
  // PARA QUÉ SIRVE ESTA LÍNEA?------------------------------------------------------------------------
  const cntr = useSelector((state) => state.cntr);
  const dispatch = useDispatch();
  const history = useHistory();

  /*  countryName, name, dificulty, duration, season */
  const [input, setInput] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
    cntr: []
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
      cntr: [...input.cntr, e.target.value]
    })
  };

  // Checkbox handler ------------------------------------------------
  const handleCheckBox = (e) =>{
   /*  e.preventDefault(); */
   setInput({
     ...input,
     [e.target.name]: e.target.value
    })
    /* if(e.target.check){
    } */
  };
    
  // Handle Submit ---------------------------------------------------
  const handleOnSubmit = (e) => {
/*     if(!input.name || !input.dificulty || !input.duration || !input.season || !input.cntr){
      e.preventDefault();
      alert('Please, all fields must be completed =P ')
    } */
    e.preventDefault();
    dispatch(createNewActivity(input));
    alert('Your activity has been successfully created!')
    history.push('/countries')
    setInput({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      cntr: []})
  };

  // AVERIGUAR BIEN QUÉ HACE ESTO
  console.log(input);

  useEffect(() =>{
    dispatch(getAllCountries())
  }, []);


  return (
    <div>
      <NavBar /> 
      <div>
      <h1> Create a new Activity  </h1>
      <div>
      <form onSubmit={ (e) => handleOnSubmit(e)}>
        {/* FALTA AGREGAR LOS CLASSNAMES A TODO --------------- */}
        <label form="name">Name: </label>
        <input onChange={handleOnChange} 
        type="text" 
        name="name" 
        value={input.name}
        placeholder='Name of your activity'
        />

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

{/* AVERIGUAR CÓMO AGREGAR NUMEROS DE TIPO HORARIO ------------------------------------------------------------------------------- */}
        <label form='duration'>Duration: </label>
        <input onChange={handleOnChange} 
        type="number" 
        name="duration" 
        value={input.duration}
        />
{/* ------------------------------------------------------------------------------------------------------------------------------- */}
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

{/*  FALTA AGREGAR COSAS ACÁ --------------------------------------------------------------------------------------------------------------- */}
        <label form='country'>Country: </label>
        <input onChange={e => handleSelect(e)} type="text" name="country"/>

        <button  type="submit">
          Create Activity
        </button>
      </form>
      </div>
      </div>
    </div>
  )
}

    