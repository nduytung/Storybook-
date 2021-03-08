import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Fade from "react-reveal/Fade";
import { data } from "autoprefixer";

const renderLandmark = (list, year = 18) => {
  if (list != null)
    return list.map((item, i) => {
      if (item.year == year)
        return (
          <Fade bottom>
            <li key={i} className="text-lg grid grid-cols-6 items-center my-4">
              <div className="rounded-xl text-white text-base font-semibold bg-pink py-3 text-center">
                On {item.date}
              </div>
              <div className="col-span-5 px-3">{item.detail}</div>
            </li>
          </Fade>
        );
    });
};

const fetchLandmarks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/landmarks`);
  const data = await res.json();

  return data;
};

const Landmark = () => {
  const landmark = [
    {
      year: 18,
      date: "01/01",
      detail: "Ngày đầu tiên mình iu nhau. Hê hê",
    },
    {
      year: 18,
      date: "26/03",
      detail: "Lần đầu tiên bọn mình đi chơi. Có cả bạn cậu nữaaa",
    },
    {
      year: 18,
      date: "17/05",
      detail: "Bọn mình hòa sau 1 lần cãi nhau to ơi là to =))))",
    },
    {
      year: 18,
      date: "25/05",
      detail: "Đi Đầm Sen với lớp nữa",
    },
    {
      year: 19,
      date: "26/06",
      detail: "Bọn mình nói chuyện lại sau 1 thời gian lâu ơi là lâu. Hí",
    },
    {
      year: 19,
      date: "04/07",
      detail: "Đi xem phim nữa nè =)))",
    },
    {
      year: 20,
      date: "03/11",
      detail: "Ai cũng biết đây là ngày gì =))) <3",
    },
    {
      year: 20,
      date: "20/11",
      detail: "Lâu lắm mới lại dc gặp bae, uwu",
    },
    {
      year: 21,
      date: "12/02",
      detail: "Lần thứ 2 bọn mình đón năm mới với nhau. Luv u soo <3 ",
    },
  ];
  let [activeYear, setActiveYear] = useState(18);
  const renderYear = () => {
    return years.map((year, i) => {
      return (
        <button
          key={year}
          onClick={() => {
            setActiveYear(year);
          }}
          className="focus:font-bold focus:text-tomato focus:outline-none list-none border rounded-xl text-center border-gray-200 text-2xl py-6 px-3 mx-2 "
        >
          {year}
        </button>
      );
    });
  };

  const years = [18, 19, 20, 21];

  return (
    <div className="container mx-auto px-2 mb-10" id="landmark">
      <SectionHeader name="Our" emph="landmarks, hehe" />
      <div className={`grid grid-cols-${years.length}`}>{renderYear()}</div>
      <div className=" mt-3 rounded-3xl bg-white border border-gray-200 w-full container py-4 px-2 mx-auto">
        {renderLandmark(landmark, activeYear)}
      </div>
    </div>
  );
};

export default Landmark;
