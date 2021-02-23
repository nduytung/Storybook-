import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const fetchData = async () => {
  const res = await fetch(`http://localhost:3001/landmarks`);
  const items = await res.json();
  return items;
};

const renderLandmark = (list, year = 18) => {
  return list.map((item, i) => {
    if (item.year == year)
      return (
        <li key={i} className="text-lg  flex items-center my-4">
          <div className="rounded-xl text-white font-semibold bg-tomato px-2 py-3">
            On {item.date}
          </div>
          <div className="ml-4">{item.detail}</div>
        </li>
      );
  });
};

const Landmark = () => {
  let [eventList, setEventList] = useState([]);
  let [activeYear, setActiveYear] = useState(18);

  const renderYear = () => {
    return years.map((year, i) => {
      return (
        <button
          key={year}
          onClick={() => {
            setActiveYear(year);
          }}
          className="focus:font-bold focus:text-tomato focus:outline-none list-none border rounded-lg text-center border-gray-200 text-2xl py-6 px-3 mx-2 "
        >
          {year}
        </button>
      );
    });
  };

  const years = [18, 19, 20, 21];

  useEffect(() => {
    fetchData().then((data) => setEventList(data));
  });

  return (
    <div className="container mx-auto px-2 mb-10">
      <SectionHeader name="Our" emph="landmarks" />
      <div className={`grid grid-cols-${years.length}`}>{renderYear()}</div>
      <div className=" mt-3 rounded-3xl bg-white border border-gray-200 w-full container py-4 px-2 mx-auto">
        {renderLandmark(eventList, activeYear)}
      </div>
    </div>
  );
};

export default Landmark;
