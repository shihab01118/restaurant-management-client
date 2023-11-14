import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item || {};

  return (
    <div className="flex gap-6">
      <img src={image} className="w-[120px] h-[105px]" style={{borderRadius: "0 200px 200px 200px"}} />
      <div className="flex gap-1">
        <div>
            <h3 className="uppercase text-xl mb-2">{name}------------------</h3>
            <p className="text-[#737373] leading-7">{recipe}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
