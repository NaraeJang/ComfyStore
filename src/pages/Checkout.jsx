import { useSelector } from "react-redux";
import { CartTotals, SectionTitle, CheckoutForm } from "../components";

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 item-start md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
