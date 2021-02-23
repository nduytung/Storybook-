import { ImHome, ImFilePicture } from "react-icons/im";
import { FaCalendarCheck, FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiNotepad, BiPurchaseTagAlt } from "react-icons/bi";
import Fade from "react-reveal/Fade";

import Link from "next/link";
const Footer = () => {
  return (
    <Fade bottom>
      <div className="fixed bottom-0 border-t border-gray-300 bg-white w-full flex text-tomato text-2xl px-4 py-3 items-center justify-between">
        <Link href="/">
          <ImHome />
        </Link>
        <AiFillPhone />
        <div>
          <BsPlusCircleFill className="-mt-8 text-5xl" />
        </div>
        <FaCalendarCheck />
        <Link href="https://www.facebook.com/Rye1611/">
          <FaFacebookMessenger />
        </Link>
      </div>
    </Fade>
  );
};

export default Footer;
