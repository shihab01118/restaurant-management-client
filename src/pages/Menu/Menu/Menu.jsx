import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useFilteredMenu from "../../../hooks/useFilteredMenu";

const Menu = () => {
  const { salad, dessert, pizza, soup, offered } = useFilteredMenu();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        title="our menu"
        description="Would you like to try a dish?"
        coverBg={menuBg}
      />
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
        <SectionTitle heading="TODAY'S OFFER" subheading="Don't miss" />
        <MenuCategory items={offered} />
      </div>
      <Cover
        title="DESSERTS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverBg={dessertBg}
      />
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
        <MenuCategory items={dessert.slice(0, 6)} title="desserts" />
      </div>
      <Cover
        title="PIZZA"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverBg={pizzaBg}
      />
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
        <MenuCategory items={pizza.slice(0, 6)} title="pizzas" />
      </div>
      <Cover
        title="SALADS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverBg={saladBg}
      />
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
        <MenuCategory items={salad.slice(0, 6)} title="salads" />
      </div>
      <Cover
        title="SOUPS"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverBg={soupBg}
      />
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
        <MenuCategory items={soup.slice(0, 6)} title="soups" />
      </div>
    </div>
  );
};
export default Menu;
