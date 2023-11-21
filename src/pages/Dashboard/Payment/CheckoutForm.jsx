import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { cart, refetch } = useCart();
  const totalPrice = cart.reduce((total, item) => item.price + total, 0);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .post("/api/v1/user/create-payment-intent", { price: totalPrice })
      .then((res) => {
        const data = res.data;
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setErrorMessage(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setErrorMessage("");
    }

    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });

    if (paymentError) {
      console.log("payment error", paymentError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          name: user.displayName,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert, use moment js
          cartId: cart.map((item) => item._id),
          status: "pending",
          price: totalPrice,
        };

        const res = await axiosSecure.post("/api/v1/user/payment", payment);
        console.log("payment saved", res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success("Payment Successfull!");
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="mt-6 text-red-600">{errorMessage}</p>
      <button
        className="block mx-auto mt-6 btn btn-sm btn-primary w-24 capitalize"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {transactionId && (
        <p className="text-green-600">
          Your transaction id is: {transactionId}
        </p>
      )}
    </form>
  );
};
export default CheckoutForm;
