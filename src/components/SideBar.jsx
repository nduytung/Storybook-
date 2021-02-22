import Link from "next/link";
import { FaTimes, FaHeart } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
const SideBar = (props) => {
  let { changeDisplay } = props;
  return (
    <div className={`h-screen w-2/3 bg-white py-6 px-3 text-xl leading-14`}>
      <FaTimes
        className="text-xl float-right text-tomato"
        onClick={changeDisplay}
      />
      <div className="w-32 h-32 rounded-full bg-gray-500 mx-auto"> </div>
      <hr className="my-6" />
      <ul>
        <li className="hover:bg-tomato hover:text-white">
          <Link href="/aboutyou">
            <a className="flex items-center text-gray-700">
              <FaHeart className="mr-3" /> About Youuuuu
            </a>
          </Link>
        </li>
        <hr />
        <li className="hover:bg-tomato hover:text-white">
          <Link href="/aboutme">
            <a className="flex items-center text-gray-700">
              <IoShieldCheckmarkSharp className="mr-3" /> About Meeeeeeee
            </a>
          </Link>
        </li>
        <hr />
        <li className="hover:bg-tomato hover:text-white">
          <Link href="/">
            <a> Wanna logout ?</a>
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default SideBar;
