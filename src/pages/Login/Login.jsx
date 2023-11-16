import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import login_img from "../../assets/others/authentication2.png";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        // navigate user
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <section className="min-h-screen login  py-10 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto shadow-2xl px-24 py-14 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={login_img} alt="login" className="w-4/5 mx-auto" />
            <p className="text-center">
              <Link className="underline" to="/register">
                Create an account?
              </Link>
            </p>
          </div>
          <div className="md:w-1/2 lg:mr-12">
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
                  onBlur={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Enter the text above"
                  className="input input-bordered"
                  onBlur={handleValidateCaptcha}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn bg-[#dbb984] text-white capitalize text-xl font-bold"
                >
                  Login
                </button>
              </div>
            </form>
            <SocialLogin />
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
