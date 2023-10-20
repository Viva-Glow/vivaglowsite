import React from "react";
import notFound from "../assets/notFound.jpg";
import "../css/404.css"

const NotFound = () => {
  return (
    <div className="notF fixed-top">
      <img src={notFound} className="card-img " alt="..." />
      <div className="card-img-overlay ">
        <div className="container text-white btn1  ">
          <button
            type="button "
            className="btn  btn404 "
          >
            <a className=" text-center btnNot" href="/">
             <b>Volver al inicio</b> 
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
