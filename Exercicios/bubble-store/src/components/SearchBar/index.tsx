import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import { ProductsData } from "../../data.js";


const Searchbar = () => {

  const [filteredData, setFilteredData] = useState(Object.values(ProductsData));
  const [wordEntered, setWordEntered] = useState("");
  const [isActive, setActive] = useState(false);


  const handleFilter = (event: React.FormEvent<HTMLInputElement>) => {
      const searchWord = event.currentTarget.value;
      setWordEntered(searchWord);
      const newFilter = Object.values(ProductsData).filter( (value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
        setActive(false);
        setFilteredData([]);
      } else {
          setActive(true);
          setFilteredData(newFilter);
      }

    }


  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search"
          value={wordEntered}
          onChange={handleFilter}
        ></input>
      </div>

      {Object.keys(filteredData).length !== 0 && (
        <div className={isActive ? "dataResult" : "dataResultInnactive"}>
          {Object.values(filteredData).map((value, index) => {
            return (
              <Link
                to={`/products/${value.id}`}
                className="dataItem"
                key={index}
              >
                <p className="filteredProduct">{value.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
