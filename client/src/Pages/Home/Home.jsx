import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Cards } from '../../Components/Cards/Cards';       
import {getAllCountries} from '../../Redux/Actions';
import NavBar from '../../Components/NavBar/NavBar';
import { Pagination } from '../../Components/Pagination/Pagination';
import Styles from './Home.module.css'

export const Home = () => {
  
    const ctrs = useSelector(state => state.countries);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCountries());
    }, []);


// PAGINATION ---------------------------------------------------

    const [page, setPage] = useState(1);
    const [cardsPerPage] = useState(10);
    const totalPages = Math.ceil(ctrs.length / cardsPerPage);


    return (
    <div className={Styles.homeContainer}>
        <NavBar /> 
        <div className={Styles.homeCards}>
                {
                ctrs?.slice((page - 1) * cardsPerPage, (page - 1) * cardsPerPage + cardsPerPage).map( c => {
                    return (
                        <Cards 
                        key={c.id}
                        name={c.name} 
                        capital={c.capital}
                        continent={c.continent}
                        flagimg = {c.flagimg}
                        />
                        )
                    })
                }
        </div>
             <Pagination 
                page = {page}
                setPage = {setPage}
                totalPages = {totalPages}
                />  
        </div>
  )
}