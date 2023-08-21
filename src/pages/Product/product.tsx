import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useAppDispatch } from "../../hooks/redux";
import { CartSlice } from "../../store/redusers/cart/cartSlice";
const Product = () => {
  const { productHref } = useParams();
  const productTitle = productHref?.replaceAll("_", " ");
  const { products } = useAppSelector((state) => state.ShopReducer);
  const dispatch = useAppDispatch();
  const { addToCart } = CartSlice.actions;
  const [product] = useState(
    products?.find((el) => {
      return el.title === productTitle;
    })
  );
  return (
    <>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <img src={product?.thumb} alt="Product" />
            </div>

            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{product?.title}</h1>
                  <p className="h3 py-2">${product?.price}</p>
                  <p className="py-2">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-secondary"></i>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Category:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong>{product?.category}</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Description:</h6>
                  <p>{product?.description}</p>
                  <div className="toCartBlock">
                    <div
                      className="addToCart"
                      onClick={() => {
                        dispatch(addToCart(product));
                      }}
                    >
                      To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
