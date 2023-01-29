import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/Actions';
import { AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";
import Style from './Pagination.module.css';

/* 
Al establecer el currentPage y setCurrentPage en el estado global, 
la searchBar puede acceder al mismo pasándole el setCurrent(1)

-> Reducer 
-> Action
-> 
*/

export const Pagination = ({ page, setPage, totalPages }) => {
    const { currentPage } = useSelector(state => state.currentPage);
    const dispatch = useDispatch();

/*     const pageNumbers = [];
    for (let i=1; i <= totalPages; i++){
        pageNumbers.push(i);
    };   */

    let firstNumber = 1;
    let lastNumber = 1;
    const aditionalNumbers = 2;
    let totalNumbers = aditionalNumbers * 2 + 1;

    if (totalNumbers >= totalPages) {
      totalNumbers = totalPages;
    } else {
      firstNumber = Math.max(currentPage - aditionalNumbers, 1)
      lastNumber = Math.min(currentPage + aditionalNumbers, totalPages);
      if (lastNumber === totalPages) {
        firstNumber += lastNumber - firstNumber - aditionalNumbers *2
      }
    }

     const pageNumbers = new Array(totalNumbers)
    .fill()
    .map((d, i) => d + firstNumber);
    console.log("Esto es pageNumbers: ", pageNumbers) 
    
    const prevPage = () =>{
        setCurrentPage(parseInt(currentPage) - 1);
        setPage(parseInt(page) - 1);
    }
    
    const nextPage = () =>{
        setCurrentPage(parseInt(currentPage) + 1);
        setPage(parseInt(page) + 1)
    } 
   
    const handlePage = (e) =>{
        setCurrentPage(parseInt(e.target.value));
        setPage(parseInt(e.target.value));
    }

    useEffect(() => {
      dispatch(setCurrentPage(page))
    }, [page])

  return (
    <div className={Style.paginationContainer}>
        <button className={Style.paginationPrev} disabled={page === 1 || page <1} onClick={prevPage}>
        <AiOutlineLeft />
        </button>
      
        { pageNumbers && 
          pageNumbers.map((num)=>(
          <button 
          key={num}
          className={Style.paginationNumber} 
          onClick={(e)=> handlePage(e)} 
          value={num} 
          >
          {num}
          </button>
        ))
        }
        <button className={Style.paginationNext} disabled={page === totalPages || page > totalPages} onClick={nextPage}>
        <AiOutlineRight/>
        </button>

    </div>
  )
};
