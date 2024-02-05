import { FiMapPin } from "react-icons/fi";
import { FaCircleDot } from "react-icons/fa6";
import { LiaCarSideSolid } from "react-icons/lia";

function TopBar() {
  return (
    <section className="flex text-sm py-2 bg-gray-100 container-x justify-between items-center">
      <div>
        <p className="text-gray-500">Welcome to Sose Investment Company Ltd!</p>
      </div>
      <div className="flex items-center gap-4 [&>div]:flex [&>div]:items-center [&>div]:gap-2 text-gray-600">
        <div>
          <FiMapPin color="green" />
          <p>Deliver to 423651</p>
        </div>
        <div>
          <LiaCarSideSolid color="green" />
          <p>Track your order</p>
        </div>
        <div>
          <FaCircleDot color="green" />
          <p>All Offers</p>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
