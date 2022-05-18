import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import CartItems from './components/CartItems';
import Header from './components/Header';
 


function App() {

  let total = 0;
  const itemsList = useSelector( (state: any) => state.cart.itemsList);
  const showCart = useSelector( (state: any) => state.cart.showCart);

  // real total
  itemsList.forEach((element: any) => {
    total += element.totalPrice;
  });


  return (
  
      <div className="App">
        <Header />

        <div className="main">
          <Outlet />
          {showCart && <CartItems />}

          <div className='total-price'>
            <h3>Total: €{total}</h3>

          </div>
        </div>
      </div>
  );
}

export default App;