import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiOutlineSearchCircle } from "react-icons/hi"
import { getCountryByName } from '../../Redux/Actions';

import Style from './SearchBar.module.css';

export const SearchBar = () => {
    const [search, setSearch] = useState(''); 
    const dispatch = useDispatch();

    function countrySubmit(e){
        e.preventDefault()
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
