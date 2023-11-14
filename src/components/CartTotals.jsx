import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector((state) => {
    return state.cartState;
  });

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="cart-totals">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="cart-totals">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="cart-totals">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* TOTAL */}
        <p className="cart-totals">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
