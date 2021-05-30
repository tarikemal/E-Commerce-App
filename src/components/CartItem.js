import { useDispatch } from "react-redux";
import { useState } from "react";

import { deleteCartItem, changeTotalCost } from "../redux/actions/cart-actions";

export function CartItem({ item }) {
  const dispatch = useDispatch();

  const [itemAmount, setItemAmount] = useState(1);

  const handleAmountChange = (e, id) => {
    if (e.target.value > itemAmount) {
      dispatch(changeTotalCost(id, "inc"));
    } else {
      dispatch(changeTotalCost(id, "dec"));
    }
    setItemAmount(e.target.value);
  };

  const deleteItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div style={{ border: "1px solid" }} className="cart-item">
      <img src={item.images[0]} alt={item.title} />
      <div className="cart-item-info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className="cart-item-amount-info">
        <p>
          {item.price
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          $
        </p>
        <input
          type="number"
          value={itemAmount}
          min="1"
          onChange={(e) => handleAmountChange(e, item.id)}
        />
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </div>
  );
}
