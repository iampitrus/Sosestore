import { FiMapPin } from "react-icons/fi";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaCircleDot } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BsFilterLeft } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function App() {
  return (
    <>
      {/* top bar */}

      <section className="flex justify-between items-center">
        <div>
          <p>Welcome to Sose Investment Company Ltd!</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p>Deliver to 423651</p>
          </div>
          <div>
            <p>Track your order</p>
          </div>
          <div>
            <p>All Offers</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
