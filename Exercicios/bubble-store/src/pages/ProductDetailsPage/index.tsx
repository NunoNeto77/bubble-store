import React, { useState, useEffect } from "react";
import { ProductsData } from "../../data";
import { Link, useParams } from "react-router-dom";
import "./ProductDetailsPage.css";
import { CartItemType } from "../../components/Header";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

type Product = {
  productId: number;
  name: string;
  price: number;
  description: string;
  img: string[];
  category: {
    0: string;
    1: string;
  };
};

const defaultProduct: CartItemType = {
  id: 0,
  name: "",
  price: 0,
  description: "",
  img: [],
  category: {
    0: "",
    1: "",
  },
  quantity: 0,
};

const ProductDetailsPage = ({ name, productId, img, price }: Product) => {
  const [singleProduct, setSingleProduct] = useState(defaultProduct);
  const [message, setMessage] = useState("");

  const params = useParams();
  const id = parseInt(params.id as string);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addToCart( {
        name: singleProduct.name,
        id: singleProduct.id,
        price: singleProduct.price,
      })
    );
  };

  useEffect(() => {
    const findProduct = () => {
      const newProduct = Object.values(ProductsData).find(
        (product) => product.id === id
      );

      if (newProduct) {
        const prod: CartItemType = {
          id: newProduct.id,
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description,
          img: newProduct.img,
          category: newProduct.category,
          quantity: 1,
        };

        setSingleProduct(prod);
      }
    };

    findProduct();
  }, [id]);

  return (
    <div>
      <div className="categoryContainer">
        <h4>Categories:&nbsp;</h4>
        <span>
          <Link className="breadCrumbInfo" to={`/products`}>
            {singleProduct.category[0]}&nbsp;
          </Link>
        </span>
        &rarr;&nbsp;
        <Link
          className="breadCrumbInfo"
          to={`/category/${singleProduct.category[1]}`}
        >
          {singleProduct.category[1]}
        </Link>
      </div>
      <div className="productDetailsPageContainer">
        <div className="productContainer">
          <img
            className="pdpPrincipalImage"
            id="pdpPrincipalImage"
            src={singleProduct.img[0]}
          ></img>

          <div className="characteristicsContainer">
            <img
              src={singleProduct.img[1]}
              className="characteristics"
              id="image1"
            ></img>
            <img
              src={singleProduct.img[2]}
              className="characteristics"
              id="image2"
            ></img>

            <p className="characteristics" id="pdpName">
              Name: {singleProduct.name}{" "}
            </p>
            <p className="characteristics" id="pdpPrice">
              Price: {singleProduct.price} €
            </p>

            <button
              className="characteristics"
              id="addToCart"
              onClick={() => {
                addToCart();
                setMessage("This product was added to the cart.");
              }}
            >
              Add To Cart
            </button>

            <p style={{ margin: "10px" }} className="message">
              {message}
            </p>
          </div>

          <div className="descriptionContainer">
            <strong style={{ color: "black" }}>About this item:</strong>
            <br />

            <p className="description">{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;