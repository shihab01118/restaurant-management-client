import ChefService_bg from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <section className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-24 relative">
      <img src={ChefService_bg} className="w-full h-full" />
      <div className="bg-white w-[896px]  absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2">
        <div className="px-24 py-12">
          <h2 className="text-5xl text-center mb-2">Bistro Boss</h2>
          <p className="leading-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ChefService;
