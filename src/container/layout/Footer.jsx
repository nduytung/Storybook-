import { ImHome } from "react-icons/im";
import { FaCalendarCheck, FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="border-t border-gray-300 bg-white w-full flex text-tomato text-2xl px-4 py-3 mt-6 items-center justify-between">
      <ImHome />
      <AiFillPhone />
      <BsPlusCircleFill className="-mt-8 text-5xl" />
      <FaCalendarCheck />
      <FaFacebookMessenger />
    </div>
  );
};

export default Footer;
