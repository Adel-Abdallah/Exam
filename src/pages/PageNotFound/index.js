import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = data => {
    console.log(data);
    navigate("/", {
      state: data
    });
  };
  return (
    <div className='not-found-container'>
      <span className='num'>404</span>
      <span>Page Not Found</span>
      <p>the page you are looking for is not seem to exist</p>
      <button className='button' onClick={handleClick}>
        {" "}
        Go To Home Page
      </button>
    </div>
  );
};

export default PageNotFound;
