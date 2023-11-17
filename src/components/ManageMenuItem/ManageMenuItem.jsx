import PropTypes from "prop-types";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useMenu from "../../hooks/useMenu";

const ManageMenuItem = ({ item, index }) => {
  const { name, price, image, _id } = item || {};
  const axiosSecure = useAxiosSecure();
  const {refetch} = useMenu();

  const handleDelete = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/api/v1/admin/menus/${_id}`)
          .then((res) => {
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
  }

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
        <Link>
          <button className="btn btn-sm text-white mr-2 bg-[#D1A054]">
            <FaRegEdit className="text-lg" />
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-500 text-lg btn btn-sm btn-ghost"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

ManageMenuItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default ManageMenuItem;
