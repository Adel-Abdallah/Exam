import "./index.css";
import Spinner from "../Spinner";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCountainer from "../../components/ProductContainer";
import NotificationCountainer from "../../components/NotificationContainer";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const accessToken = process.env.REACT_APP_TOKEN;
  const apiUrl = "https://sw-coding-challenge.herokuapp.com/api/v1";

  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  useEffect(() => {
    setIsLoading(true);
    authAxios
      .get(`${apiUrl}/products`)
      .then(response => {
        setProducts(response.data.d.slice(0, 2));
        setIsLoading(false);
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
    <div className=''>
      <div className='card'>
        <div className='row'>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <ProductCountainer products={products} />
              <NotificationCountainer notifications={notifications} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
