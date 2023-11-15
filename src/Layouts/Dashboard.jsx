import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-[#D1A054] min-h-screen p-5">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;
