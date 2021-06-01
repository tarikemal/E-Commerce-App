import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setCartItems } from "../redux/actions/cart-actions";

export function Phones() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.displayedProducts.products);

  const addCartItem = (productId) => {
    dispatch(setCartItems(productId, products));
  };

  return (
    <section className="phones">
      <div className="change-layout">
        <p>Change Layout: </p>
      </div>
      <div className="phones-container">
        {products.map((phone) => {
          return (
            <div key={phone.id} className="phone-item">
              <Link to={`/products/${phone.id}`}>
                <img
                  // style={{ width: "190px", height: "220px" }}
                  src={phone.images[0]}
                  alt={phone.title}
                />
              </Link>
              <p>
                <Link className="phone-item-title" to={`/products/${phone.id}`}>
                  {phone.title}
                </Link>
              </p>
              <h3>
                $
                {phone.price
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
              <p className="phone-item-description">{phone.description}</p>
              <button
                onClick={() => addCartItem(phone.id)}
                className="add-to-cart-btn"
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
