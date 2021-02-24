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
    <div className="text-white bg-gradient-to-r from-tomato via-coral to-yellow-400 container mx-auto px-2 text-center pb-20 ">
      <div className=" text-2xl py-20">Been together for </div>
      <div className="grid grid-cols-8">
        <Fade left>
          <div className="col-span-3">
            <Image
              src="/me.jpg"
              width={300}
              height={300}
              className="z-0 h-32 w-32 rounded-full border border-gray-500 border-dashed mx-auto"
            />
            <div className="w-3/4 mx-auto">
              <Button name="Duy Tung" />
            </div>
          </div>
        </Fade>
        <Tada>
          <div className="flex flex-col col-span-2 text-2xl">
            <span className="text-4xl font-bold my-4">{count}</span>
            <span>days</span>
          </div>
        </Tada>
        <Fade right>
          <div className="col-span-3">
            <Image
              src="/her.jpg"
              width={300}
              height={300}
              className="z-0 h-32 w-32 rounded-full border border-gray-500 border-dashed mx-auto"
            />

            <div className="w-3/4 mx-auto">
              <Button name="To Quyen" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default BeenTogether;
