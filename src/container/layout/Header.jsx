import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import SideBar from "../../components/SideBar";
import { React, useState } from "react";
const Header = () => {
  let [displayMenu, setDisplayMenu] = useState("hidden");

  const changeDisplay = () => {
    setDisplayMenu(displayMenu == "flex" ? "hidden" : "flex");
    console.log(displayMenu);
  };

  return (
    <div className="relative">
      <div className=" bg-white z-100 w-full flex items-center justify-between px-2 py-4">
        <span>
          <Image src="/logo.png" alt="" height="64" width="130" />
        </span>
        <div className="text-2xl ">
          <GrMenu onClick={changeDisplay} />
        </div>
      </div>
      <div className={`fixed top-0 right-0 w-full ${displayMenu}`}>
        <div class="bg-white w-1/3 bg-opacity-50" onClick={changeDisplay}></div>
        <SideBar changeDisplay={changeDisplay} />
      </div>
    </div>
  );
};

export default Header;
