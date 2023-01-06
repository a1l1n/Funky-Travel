import React, { useState } from 'react';
import Style from './Pagination.module.css';


export const Pagination = ({ page, setPage, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    
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

    const pageNumbers = [];
    for (let i=1; i <= totalPages; i++){
        pageNumbers.push(i);
    }

  return (
    <div className={Style.paginationContainer}>
        <button className={Style.paginationPrev} disabled={page === 1 || page <1} onClick={prevPage}>
        Prev
        </button>
      
        { pageNumbers && 
          pageNumbers.map((num)=>(
          <button className={Style.paginationNumber} value={num} onClick={(e)=> handlePage(e)} key={num}
          >
          {num}
          </button>
        ))
        }
        <button className={Style.paginationNext} disabled={page === totalPages || page > totalPages} onClick={nextPage}>
        Next
        </button>

    </div>
  )
};
