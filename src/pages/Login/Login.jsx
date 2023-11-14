import { useState } from "react";
import login_img from "../../assets/others/authentication2.png";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);
    }

  return (
    <section className="min-h-screen login  py-10 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto shadow-2xl px-24 py-14 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={login_img} alt="login" className="w-3/4" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
                onBlur={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#dbb984] text-white capitalize text-xl font-bold">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
