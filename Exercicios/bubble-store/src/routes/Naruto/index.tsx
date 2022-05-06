import React from "react";
import "./Naruto.css";
import { ProductsData } from "./../../data";
import { Link } from "react-router-dom";
import Searchbar from "../../components/SearchBar";

const House = () => {

  const fetchNarutoProducts = () => {

    return Object.values(ProductsData).map((data, index) => {
        if (data.category[1] === "naruto") {
          return (
            <div key={index} className="product">
              <Link to={`/products/${data.id}`}>
                <img src={data.img[0]} className="narutoImage" />
              </Link>

              <div className="name">{data.name}</div>
              <div className="price">{data.price} €</div>
            </div>
          );
        }
      })
  };

  return (
    <div className="narutoProductsPageContainer">
      <h2 className="narutoProductsTitle">
        Here, you can find all products about Naruto
      </h2>

      <div>
        <Searchbar />
      </div>

      <div className="narutoProductsContainer">{fetchNarutoProducts()}</div>
    </div>
  );
};

export default House;
