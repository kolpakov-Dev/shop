import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              Zay Shop
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                123 Consectetur at ligula 10660
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a
                  className="text-decoration-none"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Menu
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
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
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/profile"
                >
                  Your profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/favorites"
                >
                  Favourites
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
