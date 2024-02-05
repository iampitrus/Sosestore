import { BsFilterLeft } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";

import Logo from "./Logo";

function NavBar() {
  return (
    <nav className="bg-gray-100 flex justify-between container-x py-4">
      <div className="flex gap-4">
        <BsFilterLeft color="green" size={40} />
        <Logo />
      </div>
      <div className="flex gap-8 font-semibold">
        {/* search */}
        <form className="relative rounded-md h-12 w-[400px]">
          <div className="absolute top-4 left-2">
            <IoSearchOutline size={20} />
          </div>
          <div className="absolute top-4 right-2">
            <FaListUl color="green" size={20} />
          </div>
          <input
            className="w-full px-8 h-full bg-white rounded-md"
            placeholder="Search essentials, groceries and more..."
          />
        </form>
        {/* sign */}
        <div className="flex items-center gap-1 hover:bg-gray-300 rounded-md p-2 cursor-pointer">
          <MdPersonOutline size={25} color="green" />
          <p>Sign Up/Sign In</p>
        </div>
        {/* cart */}
        <div className="flex items-center gap-1 hover:bg-gray-300 rounded-md p-2 cursor-pointer">
          <IoCartOutline size={25} color="green" />
          <p>Cart</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
