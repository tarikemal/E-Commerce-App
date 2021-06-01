import { useSelector, useDispatch } from "react-redux";
import React, { useRef } from "react";

import { priceFilters } from "../data.js";

import {
  setDisplayedProductsByPrice,
  removePriceFilter,
} from "../redux/actions/product-actions";

export function PriceFilters({
  priceFilterUsed,
  setPriceFilterUsed,
  setIndex,
}) {
  const refs = useRef([React.createRef(), React.createRef()]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.displayedProducts.products);
  console.log(products);

  const filterPrices = (e, checkBoxIndex) => {
    if (e.target.checked) {
      if (checkBoxIndex === 0) {
        setIndex(0);
        dispatch(setDisplayedProductsByPrice(checkBoxIndex));
        refs.current[1].current.checked = false;
      } else if (checkBoxIndex === 1) {
        setIndex(1);
        dispatch(setDisplayedProductsByPrice(checkBoxIndex));
        refs.current[0].current.checked = false;
      }
    } else {
      if (checkBoxIndex === 0) {
        refs.current[0].current.checked = true;
      } else if (checkBoxIndex === 1) {
        refs.current[1].current.checked = true;
      }
    }

    setPriceFilterUsed(true);
  };

  const removeFilter = () => {
    setPriceFilterUsed(false);
    refs.current[0].current.checked = false;
    refs.current[1].current.checked = false;
    dispatch(removePriceFilter());
  };

  return (
    <section className="price-filters">
      <div className="price-filters-heading">
        <h2>Price</h2>
        {priceFilterUsed && <p onClick={removeFilter}>Remove Filter</p>}
      </div>

      <div className="price-filters-container">
        {priceFilters.map((filter, index) => {
          const checkBoxIndex = index;

          return (
            <div key={index} className="filter">
              <input
                name="filterByPrice"
                type="checkbox"
                ref={refs.current[index]}
                onClick={(e) => filterPrices(e, checkBoxIndex)}
              />
              <p>{filter}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
