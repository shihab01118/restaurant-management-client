import {
  FaAd,
  FaCalendar,
  FaFax,
  FaHamburger,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-[#D1A054] min-h-full p-5">
        <h2 className="text-3xl font-bold text-center mb-5">
          Bistro Boss <br /> <span className="font-semibold">Restaurant</span>
        </h2>
        <ul className="menu space-y-2">
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
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList />
              My Booking
            </NavLink>
          </li>
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
  );
};
export default Dashboard;
