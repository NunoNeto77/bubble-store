import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./Cart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const quantity = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <div className="cartIcon">
      <h3 onClick={showCart}> Cart: {quantity} items</h3>
    </div>
  );
};

export default ShoppingCart;
