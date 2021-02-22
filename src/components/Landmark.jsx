import SectionHeader from "./SectionHeader";

const renderEvents = async (year) => {
  const res = await fetch();
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
const Landmark = () => {
  const years = [18, 19, 20, 21];
  return (
    <div className="container mx-auto px-2">
      <SectionHeader name="Our" emph="landmarks" />
      <div className={`grid grid-cols-${years.length}`}>
        {renderYear(years)}
      </div>
    </div>
  );
};

export default Landmark;
