import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};

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
        <button className="btn btn-outline capitalize border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">
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
