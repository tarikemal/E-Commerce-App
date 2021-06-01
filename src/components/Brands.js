import { useSelector, useDispatch } from "react-redux";
import { brands } from "../data.js";

import {
  setDisplayedProductsByBrand,
  setDisplayedProductsByPrice,
} from "../redux/actions/product-actions";

export function Brands({ priceFilterUsed, index }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.displayedProducts.products);

  const filterBrands = (e, brand) => {
    if (e.target.checked) {
      dispatch(setDisplayedProductsByBrand(brand, true));
      priceFilterUsed && dispatch(setDisplayedProductsByPrice(index));
    } else {
      dispatch(setDisplayedProductsByBrand(brand, false));
    }
  };

  return (
    <section className="brands">
      <h2>Brands</h2>
      <div className="brands-container">
        {brands.map((brand, index) => {
          return (
            <div key={index} className="filter">
              <input
                type="checkbox"
                id={index}
                onClick={(e) => filterBrands(e, brand)}
              />
              <p>{brand}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
