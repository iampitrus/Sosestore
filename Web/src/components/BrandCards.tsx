function BrandCard({
  primary,
  isMamaGold,
  secondary,
  accent,
  logo,
  image,
  title,
}: any) {
  return (
    <div
      className={`flex flex-1 overflow-hidden bg-${primary} p-3 justify-between rounded-2xl relative`}
    >
      <div className="flex flex-col gap-2 justify-between">
        <p
          className={`${
            isMamaGold && "text-white"
          }  w-fit rounded-lg bg-${secondary} px-6 py-2`}
        >
          {title}
        </p>
        <div className="w-20 h-20 bg-white flex items-center justify-center">
          {isMamaGold ? "Logo" : <img src={logo} alt="Logo" />}
        </div>
        <p
          className={`${
            isMamaGold && "text-white"
          }  text-2xl uppercase font-semibold`}
        >
          up to 10% off
        </p>
      </div>
      <div className=" z-10">
        <img width={130} src={image} alt="brand" />
      </div>
      <div
        className={`rounded-full absolute w-60 h-60 -top-20 -right-10 bg-${secondary} outline outline-1 outline-offset-4 outline-${accent}`}
      ></div>
    </div>
  );
}

export default BrandCard;
