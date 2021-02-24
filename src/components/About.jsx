import { FaHeartbeat } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const About = (props) => {
  const { name, dob, color, number, dislike, note } = props;
  return (
    <div>
      <div className="bg-purple h-48 w-full rounded-b-3xl">
        <p className="text-white text-4xl mt-5 pt-8 font-bold px-2 flex items-center">
          {" "}
          <CgProfile className="mr-3" /> profile
        </p>
      </div>
      <div className="shadow-2xl container -mt-20 w-11/12 mx-auto pb-4 rounded-2xl overflow-hidden border border-gray-200">
        <div className="bg-gray-400 w-full h-96"></div>
        <div className="mx-2 my-3">
          <p className="text-2xl text-gray-600 flex items-center">
            {" "}
            <FaHeartbeat className="mr-3" /> Her name
          </p>
          <hr className="w-1/3 bg-tomato h-0.5 my-2" />
          <p className="text-gray-400 text-base">This is testing description</p>
        </div>
      </div>
    </div>
  );
};

export default About;
