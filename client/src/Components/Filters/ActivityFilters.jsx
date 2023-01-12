import React, { useEffect, useState } from 'react';
import Style from "./ActivityFilters.module.css";

export default function ActivityFilters() {
    const [ modal, setModal ] = useState(false);

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
                <select>
                    <option value="Activity">Activities</option>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>
                <select>
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

                <select>
                    <option value="dificulty">Dificulty</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>

                <select>
                    <option value="Season">Season</option>
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