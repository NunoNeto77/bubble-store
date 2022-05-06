import React from 'react'
import "./FairyTail.css";
import { ProductsData } from "./../../data";
import { Link } from 'react-router-dom';

const FairyTail = () => {

  const fetchFairyTailProducts = () => {
    return Object.values(ProductsData).map((data, index) => {
      if (data.category[1] === "fairyTail") {
        return (
          <div key={index} className="product">
            <Link to={`/products/${data.id}`}>
              <img src={data.img[0]} className="fairyTailImage" />
            </Link>
            <div className="name">{data.name}</div>
            <div className="price">{data.price} €</div>
          </div>
        );
      }
    });
  };

  return (
    <div className="fairyTailProductsPageContainer">
      <h2 className="fairyTailProductsTitle">
        Here, you can find all products about Fairy Tail
      </h2>

      <div className="fairyTailProductsContainer">
        {fetchFairyTailProducts()}
      </div>
    </div>
  );
}  

export default FairyTail;