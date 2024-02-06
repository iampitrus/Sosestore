import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import products from "../constants";

function Trending() {
  return (
    <section className="container-x py-6">
      <div className="flex justify-between mb-4">
        <div className="w-fit">
          <h2 className="font-bold text-gray-500 text-3xl">
            Trending Products
          </h2>
          <hr className="border-2 border-blue-500 rounded-full w-[100%]" />
        </div>
        <div className="flex items-center gap-1">
          <p>View All</p>
          <IoIosArrowForward color="blue" size={20} />
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col gap-6">
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
                  <p className="font-semibold capitalize text-lg">
                    {item.name}
                  </p>
                  <p className="font-bold">N{item.discountPrice}</p>
                </div>
                <div className="text-green-600 flex items-center gap-1 border-t pt-2 justify-center font-semibold">
                  <IoCartOutline color="green" size={20} />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
                  <p className="font-semibold capitalize text-lg">
                    {item.name}
                  </p>
                  <p className="font-bold">N{item.discountPrice}</p>
                </div>
                <div className="text-green-600 flex items-center gap-1 border-t pt-2 justify-center font-semibold">
                  <IoCartOutline color="green" size={20} />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
                  <p className="font-semibold capitalize text-lg">
                    {item.name}
                  </p>
                  <p className="font-bold">N{item.discountPrice}</p>
                </div>
                <div className="text-green-600 flex items-center gap-1 border-t pt-2 justify-center font-semibold">
                  <IoCartOutline color="green" size={20} />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-4 justify-center gap-4 font-semibold">
        <p>Load more...</p>
        <IoIosArrowForward color="gray" size={20} />
      </div>
    </section>
  );
}

export default Trending;
