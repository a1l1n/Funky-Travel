import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { activitySortByName, activitiesBySeason, countriesSortByName, activitySortDifficulty } from "../../Redux/Actions";
import Style from "./ActivityFilters.module.css";

export default function ActivityFilters() {
    const dispatch = useDispatch();
    const [ modal, setModal ] = useState(false);


    /* Ordenar por fecha */

    function activitiesHandleSort(e) {
        e.preventDefault();
        dispatch(activitySortByName(e.target.value))
    };

    function countriesHandleSort(e) {
        e.preventDefault();
        dispatch(countriesSortByName(e.target.value))
    };

    function handleDifficulty(e) {
        e.preventDefault();
        dispatch(activitySortDifficulty(e.target.value))
    }

    function handleSeasons(e) {
        e.preventDefault();
        dispatch(activitiesBySeason(e.target.value))
    };

    function showFilters(state) {
        console.log("modal", modal)
        setModal(state);
    }

    return (
        <div className={Style.filtersContainer}> 
            <div className={Style.actfilters_modal_button}>
                <button onClick={() => showFilters(true)}>Filters</button>
            </div>

            <div className={modal === true ? Style.filters_selects_modal : Style.filters_selects}>
                <h3>Alphabetical</h3>
                <select onChange={(e) => activitiesHandleSort(e)}>
                    <option value="Activity">Activities</option>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>
                <select onChange={(e) => countriesHandleSort(e)}>
                    <option value="Country">Countries</option>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>

                <h3>Orders</h3>
                <select>
                    <option value="date">Date</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>

                <select onChange={(e) => handleDifficulty(e)}>
                    <option value="dificulty">Dificulty</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>

                <select onChange={(e) => handleSeasons(e)}>
                    <option value="Season">Season</option>
                    <option value="All">All</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                
                <div className={Style.actfilters_close_modal_button}>
                    <button onClick={() => showFilters(false)}>Apply</button>
                </div>
            </div>
        </div>
    )
}