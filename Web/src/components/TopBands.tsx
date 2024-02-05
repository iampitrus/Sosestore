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
        {/* Mamagold */}
        <div
          className={`flex flex-1 overflow-hidden bg-gray-900 p-3 justify-between rounded-2xl relative`}
        >
          <div className="flex flex-col gap-2 justify-between">
            <p className={`text-white w-fit rounded-lg bg-gray-600 px-6 py-2`}>
              MamaGold
            </p>
            <div className="w-20 h-20 bg-white flex items-center justify-center">
              Logo
            </div>
            <p className={`text-white text-2xl uppercase font-semibold`}>
              up to 10% off
            </p>
          </div>
          <div className=" z-10">
            <img width={130} src={"./mamagoldrice1.png"} alt="brand" />
          </div>
          <div
            className={`rounded-full absolute w-60 h-60 -top-20 -right-10 bg-gray-600 outline outline-1 outline-offset-4 outline-gray-700`}
          ></div>
        </div>

        {/* Honeywell */}
        <div
          className={`flex flex-1 overflow-hidden bg-orange-300 p-3 justify-between rounded-2xl relative`}
        >
          <div className="flex flex-col gap-2 justify-between">
            <p className={` w-fit rounded-lg bg-orange-500 px-6 py-2`}>
              HoneyWell
            </p>
            <div className="w-20 h-20 bg-white flex items-center justify-center">
              <img src={"./honeywellLogo.jpeg"} alt="Logo" />
            </div>
            <p className={`text-2xl uppercase font-semibold`}>up to 10% off</p>
          </div>
          <div className=" z-10">
            <img width={130} src={"./honeywellsemolina.jpg"} alt="brand" />
          </div>
          <div
            className={`rounded-full absolute w-60 h-60 -top-20 -right-10 bg-orange-500 outline outline-1 outline-offset-4 outline-orange-400`}
          ></div>
        </div>
        {/* Bua */}
        <div
          className={`flex flex-1 overflow-hidden bg-pink-300 p-3 justify-between rounded-2xl relative`}
        >
          <div className="flex flex-col gap-2 justify-between">
            <p className={` w-fit rounded-lg bg-pink-500 px-6 py-2`}>
              HoneyWell
            </p>
            <div className="w-20 h-20 bg-white flex items-center justify-center">
              <img src={"./bualogo.jpg"} alt="Logo" />
            </div>
            <p className={`text-2xl uppercase font-semibold`}>up to 10% off</p>
          </div>
          <div className=" z-10">
            <img width={130} src={"./buaspag2.jpg"} alt="brand" />
          </div>
          <div
            className={`rounded-full absolute w-60 h-60 -top-20 -right-10 bg-pink-500 outline outline-1 outline-offset-4 outline-pink-400`}
          ></div>
        </div>
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
