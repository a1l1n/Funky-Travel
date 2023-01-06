import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearchCircle } from "react-icons/hi"
import { getAllCountries, getCountryByName } from '../../Redux/Actions';
import Style from './SearchBar.module.css';
import Swal from 'sweetalert2';

export const SearchBar = () => {
    const [search, setSearch] = useState(''); 
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);

    function isThere (search) {
      const found = countries.find(c => c.name.toLowerCase() == search.toLowerCase());
      if (!found) Swal.fire("We cannot find that country, please try again");
    }
    
    function countrySubmit(e){
      e.preventDefault();
      isThere(search);
      dispatch(getCountryByName(search)) 
      setSearch('')
    };

  return (
    <div>
          <form onSubmit={(e) => countrySubmit(e)} className={Style.search_form}>
            <input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='text'
            placeholder='Find a Country...'
            onSubmit={e => countrySubmit(e)}
            className={Style.search_placeholder}
            />
            <button type='submit' className={Style.search_button}>
                <HiOutlineSearchCircle className={Style.search_button_icon}/>
            </button>
          </form>
    </div>
  )
}
