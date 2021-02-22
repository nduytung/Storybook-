import { ImHome } from "react-icons/im";
import { FaCalendarCheck, FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="border-t border-gray-300 bg-white w-full flex text-tomato text-2xl px-4 py-3 mt-6 items-center justify-between">
      <Link href="/">
        <ImHome />
      </Link>
      <AiFillPhone />
      <BsPlusCircleFill className="-mt-8 text-5xl" />
      <FaCalendarCheck />
      <Link href="https://www.facebook.com/Rye1611/">
        <FaFacebookMessenger />
      </Link>
    </div>
  );
};

export default Footer;
