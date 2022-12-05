import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCountries, getCountryByName } from '../../Redux/Actions';
//import Style from '../SeachBar/SeachBar.module.css';

export const SearchBar = () => {

    //const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState(''); 
    const dispatch = useDispatch();

    function countrySubmit(e){
        e.preventDefault()
        dispatch(getCountryByName(search))
        setSearch('')
    };

  return (
    <div>
          <form onSubmit={(e) => countrySubmit(e)}>
            <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='text'
            placeholder='Find a Country...'
            onSubmit={e => countrySubmit(e)}
            />
            <button type='submit'>
                Search
            </button>
          </form>
{/*           {console.log(movies)} */}
    </div>
  )
}
