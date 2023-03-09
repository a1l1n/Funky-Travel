import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Style from './Pagination.module.css';

export const Pagination = ({ page, setPage, totalPages }) => {
  const [ input, setInput ] = useState(1);

  function prevPage() {
    setInput(input - 1);
    setPage(input - 1);
  };

  function nextPage() {
    setInput(input + 1);
    setPage(page + 1);
  };

  function onChange(e) {
    setInput(e.target.value)
  }

  function insertValue(e) {
    if (e.keyCode == 13) {
      if(
        e.target.value < 1 ||
        e.target.value > totalPages ||
        isNaN(e.target.value)
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value))
      }
    }
  }

  return (
    <div className={Style.paginationContainer}>
      <button 
        className={Style.pagination_button} 
        onClick={prevPage}
        disabled={page === 1 || page < 1}>
          <AiOutlineLeft />
        </button>
      <input 
        name="page" 
        autoComplete='off'
        value={input}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => insertValue(e)}
        className={Style.pagination_input}
        />
      <p className={Style.pagination_p}>de {totalPages}</p>
      <button 
        className={Style.pagination_button} 
        onClick={nextPage}
        disabled={page === totalPages || input > totalPages}>
          <AiOutlineRight />
        </button>
    </div>
  )
};
