import { GrMenu } from "react-icons/gr";
import Image from "next/image";
const Header = () => {
  // bg-gradient-to-r from-tomato via-coral to-yellow-400
  return (
    <div className=" bg-white z-100 w-full flex items-center justify-between px-2 py-4">
      <span>
        <Image src="/logo.png" alt="" height="64" width="130" />
      </span>
      <div className="text-2xl">
        <GrMenu />
      </div>
    </div>
  );
};

export default Header;
