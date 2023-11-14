import useMenu from "./useMenu";

const useFilteredMenu = () => {
  const { menu } = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return { salad, drinks, dessert, pizza, soup, offered };
};
export default useFilteredMenu;
