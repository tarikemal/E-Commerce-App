import { useSelector } from "react-redux";

import { CartItem } from "./CartItem";

export function Cart() {
  const totalCost = useSelector((state) => state.cart.totalCost);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <section className="cart-items">
      <div className="shipping-cart-header">
        <p>Shopping cart</p>
      </div>

      {cartItems.map((item) => {
        return <CartItem item={item} />;
      })}

      <div>
        {totalCost
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        $
      </div>
    </section>
  );
}
