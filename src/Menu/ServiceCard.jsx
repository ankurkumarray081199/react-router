import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgSrc}
            className="card-img-top card__img"
            alt="card"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <Link to="/" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
