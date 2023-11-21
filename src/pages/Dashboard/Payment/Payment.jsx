import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - Cart</title>
      </Helmet>
      <div className="bg-white p-10 m-16">
        <h2 className="text-3xl font-bold uppercase text-center mb-10">Payment</h2>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
};
export default Payment;
