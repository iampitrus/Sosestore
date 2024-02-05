import Logo from "./Logo";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="flex gap-4 bg-green-600 container-x pt-14 px-14 pb-6 relative">
      <div className="flex flex-col">
        <Logo />
        <div className="text-white flex flex-col gap-6">
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
        <div>
          <a href="#">
            <img width={150} src="./googleplay.png" alt="google play" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
