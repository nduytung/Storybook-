import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import SideBar from "../../components/SideBar";
import { React, useState } from "react";
import Fade from "react-reveal/Fade";
import NewNote from "../../components/NewNote";

const Header = (props) => {
  let [displayMenu, setDisplayMenu] = useState("hidden");
  let { displayNote, changeDisplayNote } = props;
  const changeDisplay = () => {
    setDisplayMenu(displayMenu == "flex" ? "hidden" : "flex");
  };

  return (
    <Fade top>
      <div className="z-10 fixed top-0 w-full">
        <div className=" bg-white flex items-center justify-between px-2">
          <span>
            <Image src="/logo.png" alt="" height="60" width="130" />
          </span>
          <div className="text-2xl ">
            <GrMenu onClick={changeDisplay} />
          </div>
        </div>
        <div className="z-10">
          <Fade right>
            <div className={`fixed top-0 right-0 w-full ${displayMenu}`}>
              <div
                class="bg-gray-200 w-1/3 bg-opacity-50"
                onClick={changeDisplay}
              ></div>
              <SideBar changeDisplay={changeDisplay} />
            </div>
          </Fade>
        </div>
      </div>
      <div className={`${displayNote} z-10 mt-20`}>
        <NewNote changeDisplayNote={changeDisplayNote} />
      </div>
    </Fade>
  );
};

export default Header;
