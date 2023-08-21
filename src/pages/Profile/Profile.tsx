import { useEffect, useState } from "react";
import "./profile.css";
import RegForm from "./regForm";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
import AuthForm from "./authForm";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { signOutFunc } from "../../store/redusers/user/ActionCreater";
import { favoritesSlice } from "../../store/redusers/favorites/favoritesSlice";
import { fetchProducts } from "../../store/redusers/shop/ActionCreater";
import { fetchFavorites } from "../../store/redusers/favorites/ActionCreater";
import { fetchOrders } from "../../store/redusers/cart/ActionCreater";
function Profile() {
  const { user } = useAppSelector((state) => state.userReducer);
  const { orders } = useAppSelector((state) => state.cartReducer);
  const { clearFavourites } = favoritesSlice.actions;
  const [regAuthFlag, changeRegAuthFlag] = useState(false);
  const [showOrders, changeOrdersFlag] = useState(false);
  const [regUserData, setRegUserData] = useState(() => {
    return {
      email: "",
      name: "",
      password: "",
    };
  });
  useEffect(() => {
    dispatch(fetchProducts(""));
    dispatch(fetchFavorites(""));
    dispatch(fetchOrders(""));
  }, [user]);

  const dispatch = useAppDispatch();
  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profileContent">
        {!user ? (
          <div className="authentication">
            {regAuthFlag ? (
              <RegForm
                func={changeRegAuthFlag}
                changeUser={setRegUserData}
                authUserData={regUserData}
              />
            ) : (
              <AuthForm
                func={changeRegAuthFlag}
                changeUser={setRegUserData}
                authUserData={regUserData}
              />
            )}
          </div>
        ) : (
          <div className="userProfile">
            <p>Hello, {user?.name}</p>
            <p>Email: {user?.email}</p>

            <div
              className="orderHistory"
              onClick={() => changeOrdersFlag(!showOrders)}
            >
              <label>
                Order history{" "}
                {!showOrders ? <BsArrowBarDown /> : <BsArrowBarUp />}
              </label>
              {showOrders ? (
                <div className="orders">
                  {orders ? (
                    orders.map((order, index) => {
                      return (
                        <div className="orderDetail">
                          <span className="orderIndex">{index + 1}</span>
                          <div className="products">
                            {order.items.map((orderItem) => {
                              return (
                                <div className="orderDetailItem">
                                  <img
                                    src={orderItem.thumb}
                                    alt={orderItem.title}
                                  />
                                  <div className="orderDetailItemBody">
                                    <span className="itemPrice">
                                      {orderItem.price}$
                                    </span>
                                    <span className="itemCount">
                                      {orderItem.count}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="orderInfo">
                            <div className="orderPrice">{order.price}$</div>
                            <div className="orderDate">{order.date}</div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>You dont have orders.</>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className="profileSignOut"
              onClick={() => {
                dispatch(signOutFunc(""));
                dispatch(clearFavourites(""));
              }}
            >
              sign out
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Profile;
