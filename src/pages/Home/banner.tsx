import React from "react";
export const Banner = ({ img, title, subtitle, text }: any) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row p-5">
          <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-lg-6 mb-0 d-flex align-items-center">
            <div className="text-align-left align-self-center">
              <h1 className="h1 text-success">{title}</h1>
              <h3 className="h2">{subtitle}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
