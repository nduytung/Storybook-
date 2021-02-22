import { GrMenu } from "react-icons/gr";
const Header = () => {
  // bg-gradient-to-r from-tomato via-coral to-yellow-400
  return (
    <div className=" bg-white z-100 w-full flex items-center justify-between px-4 py-6">
      <span>Storybook</span>
      <div>
        <GrMenu />
      </div>
    </div>
  );
};

export default Header;
