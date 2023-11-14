import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline capitalize border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
            Order your favorite food
          </button>
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default MenuCategory;
