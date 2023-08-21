import React, { useState } from "react";
import "./../assets/css/custom.css";
import "./../assets/css/bootstrap.min.css";
import "./../assets/css/templatemo.css";
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export const Header = () => {
  const { count } = useAppSelector((state) => state.cartReducer);
  const { favorites } = useAppSelector((state) => state.favoritesReducer);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
          to="/"
        >
          Zay
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          ></span>
        </button>

        <div
          className={
            !showMobileMenu
              ? "align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              : "align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between show"
          }
          id="templatemo_main_nav"
        >
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-center mx-lg-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              to="/profile"
            >
              <AiOutlineUser />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              to="/favorites"
            >
              <AiFillHeart />
              {favorites.length ? (
                <p className="cartCount">{favorites.length}</p>
              ) : (
                <></>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              to="/cart"
            >
              <AiOutlineShoppingCart />
              {count > 0 ? <p className="cartCount">{count}</p> : <></>}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
