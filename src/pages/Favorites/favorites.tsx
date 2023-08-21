import Brands from "../../components/brands";
import { useAppSelector } from "../../hooks/redux";
import FavoriteItem from "../../components/favoriteItem";
import LoginLink from "../../components/loginLink";
const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.favoritesReducer);
  const { user } = useAppSelector((state) => state.userReducer);
  return (
    <div className="favoritePage">
      <div className="container">
        <h1 className="h1 text-success">Favorites:</h1>
        {user ? (
          <div className="favoritesList">
            {favorites.length ? (
              favorites.map((elem) => {
                return <FavoriteItem key={elem.id} product={elem} />;
              })
            ) : (
              <div>Favorites is clear</div>
            )}
          </div>
        ) : (
          <LoginLink title="to use Favourites" />
        )}
      </div>
      <Brands />
    </div>
  );
};

export default Favorites;
