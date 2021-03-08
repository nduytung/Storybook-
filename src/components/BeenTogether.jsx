import { useEffect, useState } from "react";
import Button from "./Button";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import Image from "next/image";

const calculatingDate = () => {
  let date1 = new Date("11/03/2020");
  let date2 = new Date(new Date().toLocaleDateString());
  let differenceInDate =
    (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

  return differenceInDate;
};

const BeenTogether = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    setCount(calculatingDate());
  }, []);
  return (
    <div className=" text-white bg-gradient-to-r from-purple to-pink container mx-auto px-2 text-center pb-12 ">
      <div className=" text-xl font-bold pt-16 pb-12 font-mono">
        Been in luv for{" "}
      </div>
      <div className="grid grid-cols-8">
        <Fade left>
          <div className="col-span-3">
            <Image
              src="/me.jpg"
              width={250}
              height={250}
              className="z-0 h-28 w-28 rounded-full border border-gray-500 border-dashed mx-auto"
            />
            <div className="w-3/4 mx-auto ">
              <Button name="Duy Tùng" link="/aboutme" />
            </div>
          </div>
        </Fade>
        <Tada>
          <div className="flex flex-col col-span-2 text-2xl">
            <span className="text-4xl font-semibold my-4">{count}</span>
            <span className="text-xl font-light">DAYS </span>
          </div>
        </Tada>
        <Fade right>
          <div className="col-span-3">
            <Image
              src="/her.jpg"
              width={250}
              height={250}
              className="z-0 h-28 w-28 rounded-full border border-gray-500 border-dashed mx-auto"
            />

            <div className="w-3/4 mx-auto">
              <Button name="Tố Quyên" link="/aboutyou" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default BeenTogether;
