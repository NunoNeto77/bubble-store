import React from 'react'
import { useSelector } from 'react-redux';
import ShoppingCartItem from '../ShoppingCartItem';
import "../ShoppingCart/Cart.css";
import "../ShoppingCart/Cart.css";


const CartItems = () => {

    const cartItems = useSelector( (state: any) => state.cart.itemsList);

  return (
    <div className="cart-container">
      <h2 className='yourCart'>Your Cart</h2>
      <ul>
        {cartItems.map((item: any) => (
          <li key={item.id}>
            
            <ShoppingCartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              totalPrice={item.totalPrice}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartItems;