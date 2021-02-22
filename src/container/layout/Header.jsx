import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import SideBar from "../../components/SideBar";
const Header = () => {
  // bg-gradient-to-r from-tomato via-coral to-yellow-400
  return (
    <div className="relative">
      <div className=" bg-white z-100 w-full flex items-center justify-between px-2 py-4">
        <span>
          <Image src="/logo.png" alt="" height="64" width="130" />
        </span>
        <div className="text-2xl ">
          <GrMenu />
        </div>
      </div>
      <div className="fixed top-0 right-0 w-full flex">
        <div class="bg-gray-500 w-1/3 bg-opacity-50"></div>
        <SideBar />
      </div>
    </div>
  );
};

export default Header;
