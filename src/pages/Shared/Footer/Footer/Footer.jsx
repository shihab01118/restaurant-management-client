import FooterBottom from "../FooterBottom/FooterBottom";
import FooterLeft from "../FooterLeft/FooterLeft";
import FooterRight from "../FooterRight/FooterRight";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
