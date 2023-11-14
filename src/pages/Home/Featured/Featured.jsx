import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
  return (
    <section className="featured my-10 md:my-16 lg:my-24 text-white py-24 bg-fixed relative bg-opacity-30">
      <SectionTitle heading="FROM OUR MENU" subheading="Check it out" />
      {/* <div className="bg-gray-900 inset-0 h-full absolute bg-opacity-60"></div> */}
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto flex gap-16 items-center">
        <div>
          <img src={featuredImg} />
        </div>
        <div>
          <div>
            <p className="text-2xl leading-9">March 20, 2024</p>
            <p className="uppercase text-2xl leading-9">Where can i get some?</p>
            <p className="text-lg leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              possimus maiores sequi culpa quam assumenda et adipisci
              exercitationem dolore, eligendi labore non aperiam itaque. Eveniet
              deserunt magnam corrupti voluptates labore ducimus fugit
              reprehenderit? Itaque illo, expedita neque voluptates recusandae
              mollitia!
            </p>
          </div>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Order Now</button>
        </div>
      </div>
    </section>
  );
};
export default Featured;
