import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import Brands from "../../components/brands";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CartSlice } from "../../store/redusers/cart/cartSlice";
import { NavLink } from "react-router-dom";
import { createOrder } from "../../store/redusers/cart/ActionCreater";
const Cart = () => {
  const dispatch = useAppDispatch();
  const { addToCart, removeFromCart, decrementCartItemCount, changeCount } =
    CartSlice.actions;
  const { cart, price, count } = useAppSelector((state) => state.cartReducer);
  const { user } = useAppSelector((state) => state.userReducer);
  const createOrderEvent = () => {
    if (!user) {
      return;
    }
    const order = {
      items: cart,
      price: price,
    };

    dispatch(createOrder(order));
  };

  return (
    <div className="cartPage">
      <div className="container">
        <h1 className="h1 text-success">Cart:</h1>

        <table className="cartList">
          <tbody>
            {cart.length ? (
              cart.map((el, index) => {
                return (
                  <tr className="cartItem">
                    <td>
                      <span className="counter">{index + 1}.</span>
                    </td>
                    <td>
                      {" "}
                      <img src={el.thumb} alt="product" />
                    </td>
                    <td>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nbactive nav-link" : "nav-link"
                        }
                        to={`/shop/product/${el.title?.replaceAll(" ", "_")}`}
                      >
                        <p>{el.title}</p>
                      </NavLink>
                    </td>
                    <td>
                      <span>{el.price}$</span>
                    </td>
                    <td>
                      <div className="countBlock">
                        <AiOutlinePlusCircle
                          onClick={() => dispatch(addToCart(el))}
                        />
                        <input
                          value={el.count}
                          type="number"
                          onChange={(e) => {
                            dispatch(
                              changeCount({ item: el, count: e.target.value })
                            );
                          }}
                        />
                        <AiOutlineMinusCircle
                          onClick={() => dispatch(decrementCartItemCount(el))}
                        />
                      </div>
                    </td>
                    <td>
                      {" "}
                      <p>{Number(el.price! * el.count)}$</p>
                    </td>
                    <td>
                      <RxCrossCircled
                        className="deleteCartItem"
                        onClick={() => dispatch(removeFromCart(el))}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <>Cart is Empty</>
            )}
          </tbody>
        </table>
        <div className="cartTotal">
          <span>count: {count}</span>
          <span>price: {price}$</span>
        </div>
        <div className="checkoutBtn" onClick={() => createOrderEvent()}>
          Checkout
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Cart;
