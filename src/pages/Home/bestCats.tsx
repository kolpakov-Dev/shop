import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import category1Img from "./../../assets/img/category_img_01.jpg";
import category2Img from "./../../assets/img/category_img_02.jpg";
import category3Img from "./../../assets/img/category_img_03.jpg";
export const BestCats = () => {
  const { categories } = useAppSelector((state) => state.ShopReducer);
  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Categories of The Month</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 p-5 mt-3">
          <img
            src={category3Img}
            alt="Accessories"
            className="rounded-circle img-fluid border"
          />
          <h2 className="h5 text-center mt-3 mb-3">{categories![2]}</h2>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to={`/shop/${categories![2]}`}
          >
            <p className="text-center">Go Shop</p>
          </NavLink>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <img
            src={category2Img}
            alt="Accessories"
            className="rounded-circle img-fluid border"
          />
          <h2 className="h5 text-center mt-3 mb-3">{categories![1]}</h2>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to={`/shop/${categories![1]}`}
          >
            <p className="text-center">Go Shop</p>
          </NavLink>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <img
            src={category1Img}
            alt="Accessories"
            className="rounded-circle img-fluid border"
          />
          <h2 className="h5 text-center mt-3 mb-3">{categories![0]}</h2>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link" : "nav-link"
            }
            to={`/shop/${categories![0]}`}
          >
            <p className="text-center">Go Shop</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
