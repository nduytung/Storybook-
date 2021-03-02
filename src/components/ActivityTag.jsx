import { FaTimes } from "react-icons/fa";
import LightSpeed from "react-reveal/LightSpeed";

const deleteItem = async (id, changeReload) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newNote/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      changeReload();
    })
    .catch((err) => console.log(`there was an error: ${err}`));
};

const ActivityTag = (props) => {
  const { name, date, detail, id, changeReload } = props;

  return (
    <LightSpeed left>
      <div className="bg-white px-3 py-3 rounded-2xl text-base shadow-xl my-3 mx-2 border border-gray-200">
        <div className="flex justify-between pb-3">
          <div className="text-purple capitalize">{date}</div>
          <div
            className="flex items-center"
            onClick={() => deleteItem(id, changeReload)}
          >
            <FaTimes />{" "}
          </div>
        </div>
        <hr />
        <div className="font-bold pt-3">{name}</div>
        <div>{detail}</div>
      </div>
    </LightSpeed>
  );
};

export default ActivityTag;
