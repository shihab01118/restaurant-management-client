import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Payment from "./Payment";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/user/payment/${user.email}`);
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - Cart</title>
      </Helmet>
      <SectionTitle heading="PAYMENT HISTORY" subheading="At a Grance" />
      <div className="bg-white mx-16 p-10">
      <h2 className="text-3xl font-bold mb-8">Total Orders: {payments.length}</h2>
      <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-[#D1A054] text-white font-semibold text-center">
              <tr>
                <th>EMAIL</th>
                <th>TOTAL PRICE</th>
                <th>TRANSACTION ID</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <Payment key={payment._id} payment={payment} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default PaymentHistory;
