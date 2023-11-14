import { Helmet } from "react-helmet-async";
import register_img from "../../assets/others/authentication2.png";
import register_bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <section
      className="min-h-screen py-10 md:py-16 lg:py-24"
      style={{ backgroundImage: `url("${register_bg}")` }}
    >
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto shadow-2xl px-24 py-14 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2">
          <img src={register_img} alt="login" className="w-4/5 mx-auto" />
          <p className="text-center">
            <Link className="underline" to="/login">
              Already have an account?
            </Link>
          </p>
        </div>
        <div className="md:w-1/2 lg:ml-12">
          <h2 className="text-5xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("name", {required: true})}
              />
              {errors.name && <p className="text-red-600 mt-2">Name is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                {...register("email", {required: true})}
              />
              {errors.email && <p className="text-red-600 mt-2">Email is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
                {...register("password", {required: true, minLength: 6, maxLength: 20})}
              />
              {errors.password && <p className="text-red-600 mt-2">Password is required</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#dbb984] text-white capitalize text-xl font-bold">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
