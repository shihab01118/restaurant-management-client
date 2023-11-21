import {
  FaAd,
  FaBook,
  FaCalendar,
  FaFax,
  FaHamburger,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { cart } = useCart();
  // DONE: set the admin from database
  const { isAdmin } = useAdmin();

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="w-64 bg-[#D1A054] min-h-full p-5">
          <h2 className="text-3xl font-bold text-center mb-5">
            Bistro Boss <br /> <span className="font-semibold">Restaurant</span>
          </h2>
          <ul className="menu space-y-2">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageBooking">
                    <FaBook />
                    Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar />
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart />
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaAd />
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaList />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaHamburger />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaShoppingBag />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaFax />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 pt-8 pb-16 bg-base-200">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
