import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa6";

const CartItem = ({ item }) => {
  return (
    <tr className="text-center">
      <td></td>
      <td>
        <div className="flex justify-center">
          <div className="w-24 h-full">
            <img src={item.image} />
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <button className="text-red-500 text-xl">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
