import products from "../constants";

function TopDeals() {
  return (
    <section className="container-x py-6">
      <div className="w-fit mb-4">
        <h2 className="font-bold text-gray-500 text-3xl">
          Grab the best deal on{" "}
          <span className="text-green-600">Food Items</span>
        </h2>
        <hr className="border-2 border-blue-500 rounded-full w-[80%]" />
      </div>
      {/* cards */}
      <div className="grid grid-cols-5">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between w-fit shadow rounded-2xl hover:shadow-2xl"
          >
            <div className="bg-green-50 flex-1 flex items-center">
              <img width={200} src={item.image} alt={item.name} />
            </div>
            <div className="p-2">
              <div>
                <p className="font-semibold capitalize text-lg">{item.name}</p>
                <p className="font-bold">
                  N{item.discountPrice}
                  <span className="font-normal line-through">
                    N{item.mainPrice}
                  </span>
                </p>
              </div>
              <div className="text-green-600">
                <p>Save - N{item.discount}</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl p-2 text-white bg-green-600 leading-4">
              <p>
                6% <br /> OFF
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDeals;
