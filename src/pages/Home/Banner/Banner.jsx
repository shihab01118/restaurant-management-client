import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/home/01.jpg";
import banner2 from "../../../assets/home/02.jpg";
import banner3 from "../../../assets/home/03.png";
import banner4 from "../../../assets/home/04.jpg";
import banner5 from "../../../assets/home/05.png";
import banner6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <section>
      <Carousel onChange={onchange} showStatus={false}>
        <div>
          <img src={banner1} className="max-h-screen" />
        </div>
        <div>
          <img src={banner2} className="max-h-screen" />
        </div>
        <div>
          <img src={banner3} className="max-h-screen" />
        </div>
        <div>
          <img src={banner4} className="max-h-screen" />
        </div>
        <div>
          <img src={banner5} className="max-h-screen" />
        </div>
        <div>
          <img src={banner6} className="max-h-screen" />
        </div>
      </Carousel>
    </section>
  );
};
export default Banner;
