import Link from "next/link";
import { FaTimes, FaHeart } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";

const SideBar = (props) => {
  let { changeDisplay } = props;
  return (
    <div className={` h-screen w-2/3 bg-white text-xl leading-14`}>
      <div className="bg-tomato pt-4 pb-10 px-3 rounded-b-full ">
        <FaTimes
          className="text-xl right-0 text-white"
          onClick={changeDisplay}
        />
        <div className="w-32 h-32 rounded-full bg-gray-500 mx-auto overflow-hidden">
          <Image src="/us.jpg" height={300} width={300} className="block" />
        </div>
      </div>
      <ul>
        <li onClick={changeDisplay}>
          <Link href="/aboutyou">
            <a className="flex items-center text-gray-600 border leading-14 rounded-lg px-4 mx-4 my-4">
              <FaHeart className="mr-3" /> This is for you
            </a>
          </Link>
        </li>
        <li onClick={changeDisplay}>
          <Link href="/aboutme">
            <a className="flex items-center text-gray-600 border leading-14 rounded-lg mx-4 px-4 my-4">
              <IoShieldCheckmarkSharp className="mr-3" /> This is for me
            </a>
          </Link>
        </li>
        <hr className="my-6" />
      </ul>
    </div>
  );
};

export default SideBar;
