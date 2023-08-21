import { NavLink } from "react-router-dom";
import { ICatalogueItem } from "../interfaces/components";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch } from "../hooks/redux";
import { CartSlice } from "../store/redusers/cart/cartSlice";
import { ShopSlice } from "../store/redusers/shop/ShopSlice";
import { removeFromFavorites } from "../store/redusers/favorites/ActionCreater";
const FavoriteItem = ({ product }: ICatalogueItem) => {
  const dispatch = useAppDispatch();
  const { addToCart } = CartSlice.actions;
  const { updateProduct } = ShopSlice.actions;

  return (
    <div className="product_card">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nbactive nav-link" : "nav-link"
        }
        to={`/shop/product/${product.title?.replaceAll(" ", "_")}`}
      >
        <div className="card-thumb">
          <img className="card-img" src={product.thumb} alt={product.title} />
        </div>
        <div className="card-body">
          <p className="text-center ">{product.title}</p>
          <p className="text-center mb-0">{product.price} $</p>
          <div className="links">
            <AiFillHeart
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeFromFavorites(product));
                dispatch(updateProduct(product));
              }}
            />
            <AiOutlineShoppingCart
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToCart(product));
              }}
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default FavoriteItem;
