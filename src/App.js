import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/index.js";
import ProductCountainer from "./components/ProductContainer/index.js";
import NotificationCountainer from "./components/NotificationContainer/index.js";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs";

const apiUrl = "https://sw-coding-challenge.herokuapp.com/api/v1";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
});
function App() {
  const [products, setProducts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    authAxios
      .get(`${apiUrl}/products`)
      .then(response => {
        setProducts(response.data.d.slice(0, 2));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    authAxios
      .get(`${apiUrl}/notifications`)
      .then(response => {
        setNotifications(response.data.d.slice(0, 5));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='card'>
      <Header />
      <div className='row'>
        <ProductCountainer products={products} />
        <NotificationCountainer notifications={notifications} />
      </div>
    </div>
  );
}

export default App;
