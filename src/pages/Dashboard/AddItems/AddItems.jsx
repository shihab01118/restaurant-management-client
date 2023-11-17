import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - Add Items</title>
      </Helmet>
      <SectionTitle heading="ADD AN ITEM" subheading="What's New?" />
      <div className="bg-white mx-16 p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="">
                Recipe Name<span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-600 mt-2">Recipe name is required</p>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="">
                  Category<span className="text-red-600">*</span>
                </span>
              </label>
              <select defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
              {errors.category && (
                <p className="text-red-600 mt-2">Category is required</p>
              )}
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="">
                  Price<span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.name && (
                <p className="text-red-600 mt-2">Price is required</p>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">
                Recipe Details<span className="text-red-600">*</span>
              </span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
            {errors.details && (
              <p className="text-red-600 mt-2">Recipe Details is required</p>
            )}
          </div>
          <div className="form-control mt-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs bg-[#D1A054]"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D1A054] text-white capitalize text-lg font-semibold w-fit">
              Add Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddItems;
