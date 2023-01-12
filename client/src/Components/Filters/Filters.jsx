import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { filterByContinent, sortByName, sortByPopulation, getAllCountries, getActivity } from "../../Redux/Actions";
import { SearchBar } from '../SeachBar/SearchBar';
import Styles from "./Filters.module.css";
/* useEffect: ayuda a escuchar el cambio de variables y a ejecutar código
cuando estos valores cambien */

export const Filters = () => {
const dispatch = useDispatch();
const countries = useSelector(state => state.countries);

useEffect(() => {
  dispatch(getAllCountries());
  dispatch(getActivity());
}, [dispatch])

function handleContinent(e){
  e.preventDefault();
  dispatch(filterByContinent(e.target.value));
}

function handleSort(e){
  e.preventDefault();
  dispatch(sortByName(e.target.value));

}

function populationSort(e){
  e.preventDefault();
  dispatch(sortByPopulation(e.target.value))
};

  return (
    <div className={Styles.filtersContainer}>
      <div className={Styles.filtersSearchbar}>
        <SearchBar />
      </div>
        <h2>Order by: </h2>
      <select className={Styles.filtersDropdown} onChange={(e) => handleContinent(e)}>
        <option value="Order">Continents</option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select className={Styles.filtersDropdown} onChange={(e) => handleSort(e)}>
        <option value="Order">Alphabetical</option>
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
      </select>
      <select className={Styles.filtersDropdown} onChange={(e) => populationSort(e)}>
        <option value="Order">Population</option>
        <option value="asc">↑ population</option>
        <option value="desc">↓ population</option>
      </select>
      <button className={Styles.filters_button}>Clean</button>
    </div>
  )
}
