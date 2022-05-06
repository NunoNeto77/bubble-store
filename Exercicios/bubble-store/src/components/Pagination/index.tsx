import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";


   type PaginationType = {
        productsPerPage: number,
        totalProducts: number,
        paginate(num: number): void 
    }


    const Pagination = (props: PaginationType) => {

    const pageNumbers = [];
    const totalPages: number = Math.ceil(props.totalProducts / props.productsPerPage);

   

    for (let i = 1; i <= totalPages;  i++) {
        pageNumbers.push(i);
    }


    const navigate = useNavigate();

    const changeURL = (num: number) => {
        navigate(`/products?page=${num}`);
    }


  return (
    <nav className="pagination-container">
        <ul className="pagination">
            {pageNumbers.map( (number) => {
                return (
                  <li key={number} className="page-item">
                    <button
                      onClick={() => {
                        props.paginate(number);
                        changeURL(number);
                      }}
                      className="paginationButton"
                    >
                      {number}
                    </button>
                  </li>
                ); 
            })}
        </ul>
    </nav>
  );
};


export default Pagination; 

