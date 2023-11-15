import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const {refetch} = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // save info to database
      const cartItem = {
        itemId: _id,
        email: user.email,
        name, image, price
      }
      axiosSecure.post("/api/v1/user/cart", cartItem)
      .then(res => {
        const data = res.data;
        console.log(data);
        if (data.insertedId) {
          toast.success('Successfully added to cart!')
        }
        // update count of cart in navbar
        refetch();
      })
    } else {
      // navigate user to the login page with a toast
      Swal.fire({
        title: "You're not logged in",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl relative rounded-none">
      <figure className="">
        <img src={image} alt={name} className="w-full" />
      </figure>
      <p className="bg-[#111827] px-4 py-2 w-fit text-white absolute right-5 top-5">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify">{recipe}</p>
        <button
          onClick={handleAddToCart}
          className="btn btn-outline capitalize border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
