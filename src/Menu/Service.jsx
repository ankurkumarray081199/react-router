import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "./ServiceData";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ServiceData.map((val, indx) => {
                return (
                  <ServiceCard
                    key={indx}
                    title={val.title}
                    imgSrc={val.imgSrc}
                    content={val.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
