import { FaHeartbeat } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";
const About = (props) => {
  const { name, dob, color, number, dislike, note } = props;
  const imgArr = ["img 1", "img 2", "img 3", "img4"];
  let [cur, setCur] = useState(0);

  const setNextCur = () => {
    if (cur == imgArr.length - 1) setCur(0);
    else setCur((cur += 1));
  };

  const setPrevCur = () => {
    if (cur == 0) setCur(imgArr.length - 1);
    else setCur((cur -= 1));
  };

  return (
    <div>
      <div className="bg-purple h-48 w-full rounded-b-3xl">
        <p className="text-white text-4xl mt-5 pt-8 font-bold px-2 flex items-center">
          {" "}
          <CgProfile className="mr-3" /> profile
        </p>
      </div>
      <div className="shadow-2xl container -mt-20 w-11/12 mx-auto pb-4 rounded-2xl overflow-hidden border border-gray-200">
        <div className="bg-gray-400 w-full h-96">
          <p> {imgArr[cur]} </p>
        </div>
        <div className=" w-full h-96 justify-between flex items-center text-4xl -mt-96 bg-transparent">
          <GrPrevious onClick={setPrevCur} />
          <GrNext onClick={setNextCur} />
        </div>

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
