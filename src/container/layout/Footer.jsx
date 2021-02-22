import { ImHome } from "react-icons/im";
import { FaCalendarCheck, FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" bg-white w-full flex text-tomato text-2xl px-4 py-3 items-center justify-between">
      <ImHome />
      <AiFillPhone />
      <FaCalendarCheck />
      <FaFacebookMessenger />
    </div>
  );
};

export default Footer;
