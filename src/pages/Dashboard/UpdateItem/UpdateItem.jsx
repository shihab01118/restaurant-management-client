import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateItem = () => {
  const item = useLoaderData();
  const { name, price, recipe, category, _id } = item || {};
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    const updatedMenu = {
      name: data.name,
      price: data.price,
      recipe: data.recipe,
      category: data.category,
    };
    axiosSecure.patch(`/api/v1/admin/menus/${_id}`, updatedMenu)
    .then(res => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount > 0) {
            toast.success(`${name} updated successfully!`)
        }
    })
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - Update Item</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold mb-10 uppercase text-center">
          Update Item
        </h2>
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
                defaultValue={name}
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
                <select
                  defaultValue={category}
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
                  <option value="drink">Drinks</option>
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
                  defaultValue={price}
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
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
              {errors.details && (
                <p className="text-red-600 mt-2">Recipe Details is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054] text-white capitalize text-lg font-semibold w-fit mx-auto">
                Update Recipe details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UpdateItem;
