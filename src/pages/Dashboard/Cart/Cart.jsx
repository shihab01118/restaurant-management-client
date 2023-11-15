import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <section>
      <div className="">
        <SectionTitle heading="WANNA ADD MORE?" subheading="My Cart" />
      </div>
      <div className="bg-white mx-16 p-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Total Orders: {cart.length}</h2>
          <h2 className="text-3xl font-bold">Total Price: ${totalPrice}</h2>
          <button className="btn bg-[#D1A054] border-none capitalize text-white text-lg font-bold">
            Pay
          </button>
        </div>
      </div>
    </section>
  );
};
export default Cart;
