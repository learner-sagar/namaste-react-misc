import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  if (items.length == 0) {
    return <h2>Cart is empty</h2>;
  }
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div>
            <li className="flex justify-between w-72 my-2">
              {item}
              <button
                className="bg-slate-600 rounded-lg px-3 my-4 text-white"
                onClick={() => dispatch(removeItem(item))}
              >
                remove item
              </button>
            </li>
          </div>
        ))}
      </ul>
      <button
        className="bg-slate-600 rounded-lg px-3 my-4 text-white"
        onClick={() => dispatch(clearCart())}
      >
        clear cart
      </button>
    </div>
  );
};

export default Cart;
