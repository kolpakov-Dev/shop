# React/TypeScript, Redux Tollkit, Firebase Shop

Libraries used in the project:
- Redux Tollkit
- React Router Dom
- Firebase
- react-icons

API:
- https://fakestoreapi.com

## About
In this online store, you can add any products to your shopping cart and create an order.
Most of the functionality will become available after authorization (favorite products, ordering, viewing all orders).

Authorization is implemented using firebase auth.

We get products and categories with the API: fakestoreapi.

Favorites and orders are saved in the firestore firebase and displayed when you log in to your account. Each product has its own unique href. The transition to the product page is implemented on all pages where it is displayed.
After receiving data from the server, everything is stored in the redux store.
