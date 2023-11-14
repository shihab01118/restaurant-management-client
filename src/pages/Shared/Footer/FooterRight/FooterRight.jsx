import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const FooterRight = () => {
  return (
    <div className="text-white text-center bg-[#111827] w-full py-24">
      <h2 className="text-3xl font-medium">Follow US</h2>
      <p className="text-xl font-medium mt-6 mb-8">Join us on social media</p>
      <div className="flex justify-center gap-8 text-3xl">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
};

export default FooterRight;
