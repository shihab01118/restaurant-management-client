import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <OrderOnline />
      <ChefService />
      <PopularMenu />
      <CallUs />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
