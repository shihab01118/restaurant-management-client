import { Helmet } from "react-helmet-async";
import CartItem from "../../../components/CartItem/CartItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - Cart</title>
      </Helmet>
      <SectionTitle heading="WANNA ADD MORE?" subheading="My Cart" />
      <div className="bg-white mx-16 p-10">
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl font-bold">Total Orders: {cart.length}</h2>
          <h2 className="text-3xl font-bold">Total Price: ${totalPrice}</h2>
          <button className="btn bg-[#D1A054] border-none capitalize text-white text-lg font-bold">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-[#D1A054] text-white font-semibold text-center">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartItem key={item._id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Cart;
