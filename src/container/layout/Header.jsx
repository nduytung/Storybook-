import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import SideBar from "../../components/SideBar";
import { React, useState } from "react";
import Fade from "react-reveal/Fade";

const Header = () => {
  let [displayMenu, setDisplayMenu] = useState("hidden");

  const changeDisplay = () => {
    setDisplayMenu(displayMenu == "flex" ? "hidden" : "flex");
    console.log(displayMenu);
  };

  return (
    <Fade top>
      <div className=" fixed top-0 w-full">
        <div className=" bg-white z-100 flex items-center justify-between px-2">
          <span>
            <Image src="/logo.png" alt="" height="60" width="130" />
          </span>
          <div className="text-2xl ">
            <GrMenu onClick={changeDisplay} />
          </div>
        </div>
        <div className={`fixed top-0 right-0 w-full ${displayMenu}`}>
          <div
            class="bg-white w-1/3 bg-opacity-50"
            onClick={changeDisplay}
          ></div>
          <SideBar changeDisplay={changeDisplay} />
        </div>
      </div>
    </Fade>
  );
};

export default Header;
