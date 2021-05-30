import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function Header() {
  const cartItemsAmount = useSelector((state) => state.cart.cartItemsAmount);

  return (
    <section className="header-container">
      <div className="header">
        <h2 className="header-title">
          <Link to="/products">Ecommerce</Link>
        </h2>
        <Link to="/cart">
          <div className="cart-items-counter">
            <span>x</span>
            <span>Cart ({cartItemsAmount})</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
