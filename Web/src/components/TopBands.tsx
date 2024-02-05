import BrandCard from "./BrandCards";

function TopBands() {
  return (
    <section className="container-x py-6">
      <div className="w-fit mb-4">
        <h2 className="font-bold text-gray-500 text-3xl">
          Top <span className="text-green-600">Brands</span>
        </h2>
        <hr className="border-2 border-blue-500 rounded-full w-[130%]" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BrandCard
          title={"MamaGold"}
          logo={"logo"}
          primary={"gray-900"}
          secondary={"gray-700"}
          accent={"gray-800"}
          image={"./mamagoldrice1.png"}
          isMamaGold
        />
        <BrandCard
          title={"HoneyWell"}
          primary={"orange-300"}
          secondary={"orange-500"}
          accent={"orange-400"}
          image={"./honeywellsemolina.jpg"}
          logo={"./honeywellLogo.jpeg"}
        />
        <BrandCard
          title={"BUA"}
          primary={"pink-300"}
          secondary={"pink-500"}
          accent={"pink-400"}
          image={"./buaspag2.jpg"}
          logo={"./bualogo.jpg"}
        />
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <div className="w-5 h-2 rounded-full bg-blue-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
      </div>
    </section>
  );
}

export default TopBands;
