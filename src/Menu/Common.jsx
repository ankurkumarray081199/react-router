import React from "react";
import { NavLink } from "react-router-dom";
import img from "../Images/spaceship.png";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center heightclass">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.title}
                    <strong className="brand-name"> React Hooks</strong>
                  </h1>
                  <h2 className="my-3">{props.subTitle}</h2>
                  <div className="mt-3 button1">
                    <NavLink
                      to={props.btnLink}
                      className="btn get-btn btn-outline-primary "
                    >
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img}
                    className="img-fluid animated"
                    alt="homeImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
