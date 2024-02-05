import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Hero() {
  return (
    <section className="container-x my-4">
      <div className="w-full relative">
        <img src="./bgphoto1.png" alt="Advert" className="w-full rounded-3xl" />
        <div className="absolute left-0 right-0 top-7 mx-auto flex flex-col items-center">
          <h1 className="text-orange-300 text-6xl italic font-semibold ">
            Sose Sales App
          </h1>
          <p className="font-bold mt-4 text-white text-lg">
            Best <span className="text-orange-400">Price For</span> Wholesale
          </p>
          <button
            disabled
            className="uppercase px-4 py-2 text-green-600 font-bold bg-white rounded-full"
          >
            Delivery Available
          </button>
        </div>
        {/* arrows */}
        <div className="absolute top-[40%] bottom-0 my-auto -left-7">
          <div className=" rounded-full w-fit bg-green-50 p-5 outline-white outline">
            <IoIosArrowBack size={20} />
          </div>
        </div>
        <div className="absolute top-[40%] bottom-0 my-auto -right-7">
          <div className="rounded-full w-fit bg-green-50 p-5 outline-white outline">
            <IoIosArrowForward size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
