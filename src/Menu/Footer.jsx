import React from "react";
import "../index.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="w-100 h-100 my-5 p-3 mb-0  bg-light text-center ">
        <p className="font-monospace">
          ©️ {year} AnkurKumarRay. All Rights Reserved | Terms and Conditions
          Apply
        </p>
      </footer>
    </>
  );
};

export default Footer;
