import { useEffect, useState } from "react";
import ActivityTag from "./ActivityTag";
import SectionHeader from "./SectionHeader";

const renderActivity = (data, changeReload) => {
  if (data != null)
    return data.map((item) => {
      return (
        <li id={item.id}>
          {console.log(`the id is ${item.id}`)}
          <ActivityTag
            name={item.header}
            date={item.date}
            detail={item.detail}
            id={item.id}
            changeReload={changeReload}
          />
        </li>
      );
    });
};

const fetchNote = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newNote`);
  const data = res.json();
  return data;
};

const Upcomming = () => {
  const [note, setNote] = useState([]);
  const [reload, setReload] = useState(false);

  const changeReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    fetchNote().then((data) => {
      setNote(data);
    });
  }, [reload]);
  return (
    <div className="py-4 ">
      <SectionHeader name="Upcoming" emph="activities" />
      <ul>{renderActivity(note, changeReload)}</ul>
    </div>
  );
};

export default Upcomming;
