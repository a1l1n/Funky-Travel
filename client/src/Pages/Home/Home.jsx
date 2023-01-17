import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Cards } from '../../Components/Cards/Cards';       
import { getAllCountries } from '../../Redux/Actions';
import { Pagination } from '../../Components/Pagination/Pagination';
import { Filters } from '../../Components/Filters/Filters';
import Styles from './Home.module.css';

export const Home = () => {
    const ctrs = useSelector(state => state.countries);
    const filtereds = useSelector(state => state.filteredCountries);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);


// PAGINATION ---------------------------------------------------

    const [page, setPage] = useState(1);
    const [cardsPerPage] = useState(10);
    const totalPages = filtereds.length? Math.ceil(filtereds.length / cardsPerPage) : Math.ceil(ctrs.length / cardsPerPage);


    return (
    <div className={Styles.homeContainer}>
        <Filters />
        <div className={Styles.homeCards}>
                {
                filtereds?.length ? filtereds.slice((page - 1) * cardsPerPage, (page - 1) * cardsPerPage + cardsPerPage).map(c => {
                    return (
                        <Cards 
                        key={c.id}
                        id={c.id}
                        name={c.name} 
                        continent={c.continent}
                        flagimg = {c.flagimg}
                        />
                        )
                    })
                : ctrs?.slice((page - 1) * cardsPerPage, (page - 1) * cardsPerPage + cardsPerPage).map( c => {
                    return (
                        <Cards 
                        key={c.id}
                        id={c.id}
                        name={c.name} 
                        continent={c.continent}
                        flagimg = {c.flagimg}
                        />
                        )
                    })
                }
        </div>
{            <div className={Styles.homePagination}>
             <Pagination 
                page = {page}
                setPage = {setPage}
                totalPages = {totalPages}
             />  
            </div>}
        </div>
  )
};

/*
COSAS QUE ME FALTAN TERMINAR DE HACER
LandingPage:         RESPONSIVE
NavBar:              RESPONSIVE
Home - Filtros:      clearButton
                     RESPONSIVE
Home - Paginado:     que marque la Current Page!
                     cuando buscás un país, que automáticamente se renderice la página 1

Actividades:         UPDATE
                     UPDATE - RESPONSIVE
Create Activities:   RESPONSIVE
About:               TODO
*/