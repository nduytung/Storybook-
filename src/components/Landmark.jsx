import SectionHeader from "./SectionHeader";

const renderLandmark = (list) => {
  return list.map((item, i) => {
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
const renderYear = (years) => {
  return years.map((year, i) => {
    return (
      <li
        key={year}
        className="list-none border rounded-lg text-center border-gray-200 text-2xl py-6 px-3 mx-2 hover:bg-tomato"
      >
        {year}
      </li>
    );
  });
};
const Landmark = ({ data }) => {
  const list = [
    {
      year: 2018,
      date: "01/02",
      detail: "2018 lorem ipsum this is just a testing message",
    },
    {
      year: 2018,
      date: "01/02",
      detail: "2018 lorem ipsum this is just a testing message",
    },
    {
      year: 2019,
      date: "01/02",
      detail: "2019 lorem ipsum this is just a testing message",
    },
  ];

  console.log(data);
  const years = [18, 19, 20, 21];
  return (
    <div className="container mx-auto px-2">
      <SectionHeader name="Our" emph="landmarks" />
      <div className={`grid grid-cols-${years.length}`}>
        {renderYear(years)}
      </div>
      <div className=" mt-3 rounded-3xl bg-white border border-gray-200 w-full container py-4 px-2 mx-auto">
        {renderLandmark(list)}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/landmarks");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default Landmark;
