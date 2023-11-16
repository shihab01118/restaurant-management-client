import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const CartItem = ({ item, index }) => {
  const { _id, name, price, image } = item || {};
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCart();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/user/cart/${_id}`).then((res) => {
          const data = res.data;
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{index + 1}</td>
      <td>
        <div className="flex justify-center">
          <div className="w-24 h-full">
            <img src={image} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <button onClick={handleDelete} className="text-red-500 text-xl">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default CartItem;
