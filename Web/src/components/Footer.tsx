import Logo from "./Logo";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="flex flex-col overflow-hidden text-white bg-green-600 container-x pt-14 px-14 pb-6 relative">
      <div className="flex gap-20 ">
        <div className="flex flex-col z-10">
          <Logo />
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-2xl font-semibold">Contact Us</h4>
            <div className="flex gap-1">
              <FaWhatsapp color="white" size={20} />
              {/* icoan */}
              <div className="flex flex-col">
                <p>Whatsapp</p>
                <p>+2349877654266</p>
              </div>
            </div>
            <div className="flex gap-1">
              <FiPhone color="white" size={20} />
              {/* icoan */}
              <div className="flex flex-col">
                <p>Call Us</p>
                <p>+2349877654266</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Download App</p>
            </div>
          </div>
          <div className="flex items-center">
            <button>
              <img width={150} src="./googleplay.png" alt="google play" />
            </button>
            <button>
              <img width={135} src="./appstore.png" alt="apple store" />
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-3xl">Most Popular Categories</h2>
          <hr className="border-2 mt-2 border-white rounded-full w-[80%]" />
          <ul className="mt-8 list-disc flex flex-col gap-2 ml-8">
            <li>Dangote</li>
            <li>Bua</li>
            <li>Honeywell</li>
            <li>Mama Gold</li>
            <li>Chicken feed</li>
            <li>Flour</li>
            <li>Salt</li>
            <li>Spagetti</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Customer Services</h2>
          <hr className="border-2 mt-2 border-white rounded-full w-[80%]" />
          <ul className="mt-8 list-disc flex flex-col gap-2 ml-8">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <hr className="border mt-8 border-blue-600 rounded-full w-full" />

      <p className="text-center my-6 ">
        &copy; 2024 All rights reserved. Sose Investment Company Ltd.
      </p>
      {/* background circle */}
      <div
        className={`rounded-full absolute w-72 h-72 -top-20 -right-24 bg-orange-300`}
      ></div>
      <div
        className={`rounded-full absolute w-72 h-72 -top-20 -left-10 bg-orange-300`}
      ></div>
    </footer>
  );
}

export default Footer;
