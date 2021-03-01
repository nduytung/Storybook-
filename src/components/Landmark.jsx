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
            <li key={i} className="text-lg  flex items-center my-4">
              <div className="rounded-xl text-white font-semibold bg-pink px-2 py-3">
                On {item.date}
              </div>
              <div className="ml-4">{item.detail}</div>
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
  let [activeYear, setActiveYear] = useState(18);
  let [landmark, setLandmark] = useState([]);
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

  useEffect(() => {
    fetchLandmarks().then((data) => setLandmark(data));
  }, []);

  const years = [18, 19, 20, 21];

  return (
    <div className="container mx-auto px-2 mb-10" id="landmark">
      <SectionHeader name="Our" emph="landmarks" />
      <div className={`grid grid-cols-${years.length}`}>{renderYear()}</div>
      <div className=" mt-3 rounded-3xl bg-white border border-gray-200 w-full container py-4 px-2 mx-auto">
        {renderLandmark(landmark, activeYear)}
      </div>
    </div>
  );
};

export default Landmark;
