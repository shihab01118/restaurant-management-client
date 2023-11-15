import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salads">Order</NavLink>
      </li>
      <li>
        <Link to="/">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute left-[90%] -top-4 z-10 bg-orange-500 btn btn-xs btn-circle border-none text-white">0</span>
          </div>
        </Link>
      </li>

      {user ? (
        <>
          <li className="ml-8">
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <>
          <li className="ml-8">
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="navbar bg-[#15151580] text-white fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <h2 className="text-xl md:text-3xl font-black text-center">
            BISTRO BOSS <br />{" "}
            <span className="text-xl md:text-2xl font-semibold">
              RESTAURANT
            </span>
          </h2>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </nav>
  );
};
export default Navbar;
