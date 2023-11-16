import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
      };
      axiosPublic.post("/api/v1/users", userInfo).then((res) => {
        const data = res.data;
        console.log(data);
        toast.success("Login Successful!")
        navigate(from, {replace: true});
      });
    });
  };

  return (
    <div className="mt-8">
      <p className="text-lg font-medium mb-8 text-center">Or sign in with</p>
      <div className="flex justify-center gap-10">
        <button className="btn btn-circle btn-outline">
          <FaFacebookF className="text-xl" />
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle className="text-xl" />
        </button>
        <button className="btn btn-circle btn-outline">
          <FaGithub className="text-xl" />
        </button>
      </div>
    </div>
  );
};
export default SocialLogin;
