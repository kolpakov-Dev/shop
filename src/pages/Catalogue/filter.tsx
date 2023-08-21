import { useAppSelector } from "../../hooks/redux";
import { ICatalogueFilter } from "../../interfaces/components";

const Filter = ({ currCategory, changeCategory }: ICatalogueFilter) => {
  const { categories } = useAppSelector((state) => state.ShopReducer);
  return (
    <div className="col-lg-3">
      <h1 className="h2 pb-4">Categories</h1>
      <ul className="filter-list">
        <li
          className={
            currCategory === "all" ? "filter-item active" : "filter-item"
          }
          onClick={() => changeCategory("all")}
        >
          all
        </li>
        {categories?.length ? (
          categories.map((category, index) => {
            return (
              <li
                className={
                  currCategory === category
                    ? "filter-item active"
                    : "filter-item"
                }
                key={index}
                onClick={() => changeCategory(category)}
              >
                {category}
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Filter;
