import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ManageMenuItem from "../../../components/ManageMenuItem/ManageMenuItem";

const ManageItems = () => {
    const {menu} = useMenu();
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard - Add Items</title>
      </Helmet>
      <SectionTitle heading="MANAGE ALL ITEMS" subheading="Harry Up" />
      <div className="bg-white mx-16 p-10">
      <h2 className="text-3xl font-bold mb-5">Total Items: {menu.length}</h2>
      <div className="overflow-x-auto"> 
          <table className="table">
            <thead className="bg-[#D1A054] text-white font-semibold text-center">
              <tr className="h-16">
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <ManageMenuItem key={item._id} index={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ManageItems;
