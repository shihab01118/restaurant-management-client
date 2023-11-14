import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const { menu } = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24">
      <SectionTitle heading="FROM OUR MENU" subheading="Check it out" />
      <div className="grid md:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default PopularMenu;
