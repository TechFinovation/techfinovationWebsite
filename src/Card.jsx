import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              We are provding our services for iOS , Android as well Web app with best industry experience and excellence for more 
              you can reach　us.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Get Quote
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
