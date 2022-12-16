import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Cards } from '../../Components/Cards/Cards';       
import {getAllCountries} from '../../Redux/Actions';
import { Pagination } from '../../Components/Pagination/Pagination';
import { Filters } from '../../Components/Filters/Filters';
import Styles from './Home.module.css'

export const Home = () => {
    const ctrs = useSelector(state => state.countries);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);


// PAGINATION ---------------------------------------------------

    const [page, setPage] = useState(1);
    const [cardsPerPage] = useState(10);
    const totalPages = Math.ceil(ctrs.length / cardsPerPage);


    return (
    <div className={Styles.homeContainer}>
        <Filters />
        <div className={Styles.homeCards}>
                {
                ctrs?.slice((page - 1) * cardsPerPage, (page - 1) * cardsPerPage + cardsPerPage).map( c => {
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
            <div className={Styles.homePagination}>
             <Pagination 
                page = {page}
                setPage = {setPage}
                totalPages = {totalPages}
             />  
            </div>
        </div>
  )
};

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