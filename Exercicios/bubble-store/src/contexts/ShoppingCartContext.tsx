import React from 'react'
import { CartItemType } from '../components/Header';


const ShoppingCartContext = React.createContext({
  shoppingCartItems: [] as CartItemType[],
  handleAddToCart: (clickedItem: CartItemType): void => {},
});


 export default ShoppingCartContext;
