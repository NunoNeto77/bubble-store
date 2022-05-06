import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import FairyTail from './routes/FairyTail';
import Home from './routes/Home';
import Naruto from './routes/Naruto';
import NoPage from './routes/NoPage';
import Products from './routes/Products';
import ProductDetailsPage from "./pages/ProductDetailsPage/index";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="products"
              element={
                <Products
                  productsPerPage={0}
                  totalProducts={0}
                  paginate={function (num: number): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route path="category/naruto" element={<Naruto />} />
            <Route path="category/fairytail" element={<FairyTail />} />
            <Route
              path="/products/:id"
              element={
                <ProductDetailsPage productId={0} name={''} price={0} description={''} img={[]} category={{
                  0: '',
                  1: ''
                }}/>} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);