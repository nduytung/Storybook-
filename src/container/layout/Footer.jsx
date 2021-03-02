import { ImHome, ImFilePicture } from "react-icons/im";
import { FaCalendarCheck, FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import Link from "next/link";
const Footer = (props) => {
  let { changeDisplayNote } = props;

  return (
    <Fade bottom>
      <div className="fixed bottom-0 border-t border-gray-300 bg-white w-full flex text-purple text-2xl px-4 py-3 items-center justify-between">
        <Link href="/">
          <ImHome />
        </Link>
        <AiFillPhone
          onClick={() => {
            toast.info("Số của mình là 0919516377 ;-)");
          }}
        />
        <div>
          <a href="#landmark">
            <BsPlusCircleFill
              onClick={changeDisplayNote}
              className="-mt-8 text-5xl"
            />
          </a>
        </div>
        <FaCalendarCheck
          onClick={() => {
            toast.info("Phần này mình sẽ thêm, yên tâm hihihihi");
          }}
        />
        <Link href="https://www.facebook.com/Rye1611/">
          <FaFacebookMessenger />
        </Link>
      </div>
      <ToastContainer autoClose={10000} />
    </Fade>
  );
};

export default Footer;
