import { FaTimes } from "react-icons/fa";
const ActivityTag = (props) => {
  const { name, date, detail } = props;

  return (
    <div className="bg-white px-3 py-3 rounded-2xl text-base shadow-xl my-3 mx-2 border border-gray-200">
      <div className="flex justify-between pb-3">
        <div className="text-tomato capitalize">{date}</div>
        <div className="flex items-center">
          <FaTimes />{" "}
        </div>
      </div>
      <hr />
      <div className="font-bold">{name}</div>
      <div>{detail}</div>
    </div>
  );
};

export default ActivityTag;
