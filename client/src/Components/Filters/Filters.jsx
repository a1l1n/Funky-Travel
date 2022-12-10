import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { filterByContinent } from "../../Redux/Actions";

export const Filters = () => {
const dispatch = useDispatch();

function handleContinent(e){
  e.preventDefault();
  dispatch(filterByContinent(e.target.value));
}


  return (
    <div>
      <select onChange={(e) => handleContinent(e)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select>
        <option value="Order">Alphabetical Order</option>
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
      </select>
      <select>
        <option value="Order">Order by Population</option>
        <option value="↑ population">↑ population</option>
        <option value="↓ population">↓ population</option>
      </select>
    </div>
  )
}
