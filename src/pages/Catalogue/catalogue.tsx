import Filter from "./filter";
import Brands from "../../components/brands";
import CatalogueItem from "../../components/catalogueItem";
import { useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/Shop";
import { useParams } from "react-router-dom";

const Catalogue = () => {
  const { products } = useAppSelector((state) => state.ShopReducer);
  const { category } = useParams();
  const np = products?.filter((el) => {
    return el.category === category;
  });
  const [shopProducts, updateShopProducts] = useState(
    category ? (np as IProduct[] | null) : products
  );
  const [currCategory, changeCurrCategory] = useState(category ?? "all");
  const onChangeCategory = (newCategory: string) => {
    changeCurrCategory(newCategory);
    if (newCategory === "all") {
      updateShopProducts(products);
      return;
    }
    const arr = products?.filter((el) => {
      return el.category === newCategory;
    });

    updateShopProducts(arr as IProduct[] | null);
  };
  useEffect(() => {
    if (category) {
      onChangeCategory(category);
    }
    if (!shopProducts) {
      updateShopProducts(products);
    }
  }, [products]);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <Filter
            currCategory={currCategory}
            changeCategory={onChangeCategory}
          />

          <div className="col-lg-9">
            <div className="container">
              <div className="products-list">
                {shopProducts?.length ? (
                  shopProducts.map((elem) => {
                    return <CatalogueItem key={elem.id} product={elem} />;
                  })
                ) : (
                  <div>No products in catalogue. Wait for new season :)</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Catalogue;
