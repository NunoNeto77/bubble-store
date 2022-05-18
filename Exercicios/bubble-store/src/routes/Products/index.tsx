import React, { useEffect, useState } from "react";
import "./Products.css";
import { ProductsData } from "../../data.js";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Searchbar from "../../components/SearchBar";


 type PaginationType = {
   productsPerPage: number;
   totalProducts: number;
   paginate(num: number): void;
 };


const Products = (props: PaginationType) => {

  const [sort, setSort] = useState("");
  const [products, setProducts] = useState(Object.values(ProductsData));
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerpage] = useState(6);

  useEffect(() => {
    sortByPriceHighToLow();
  }, [sort]);

  function sortByPriceHighToLow() {
    if (sort === "highToLow") {
      setProducts(
        Object.values(ProductsData).sort(function (a, b) {
          return b.price - a.price;
        })
      );
      return;
    }

    setProducts(Object.values(ProductsData));
  }

  // Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //  Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  function change(e: React.ChangeEvent<HTMLSelectElement>) {
    setSort(e.target.value);
  }

 /* const totalPages: number = Math.ceil(
    props.totalProducts / props.productsPerPage
  ); */


  return (
    <div className="productsPageContainer">
      <h2 className="productsTitle" id="productsTitle">
        Here, you can find all products that we have
      </h2>

      <div>
        <Searchbar />
      </div>

      <div className="selectContainer">
        <span className="sortBy">Sort by:</span>
        <select value={sort} id="priceFilter" onChange={change}>
          <option value="default">Default</option>
          <option value="highToLow">High-Low price</option>
        </select>
      </div>

      <div className="productsContainer">
        {currentProducts.map((data, index) => {
          return (
            <div key={index} className="product">
              <Link to={`/products/${data.id}`}>
                <img src={data.img[0]} className="productsImage" />
              </Link>
              <div className="name">{data.name}</div>
              <div className="price">{data.price} €</div>
            </div>
          );
        })}
      </div>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;