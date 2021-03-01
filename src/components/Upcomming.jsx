import { useEffect, useState } from "react";
import ActivityTag from "./ActivityTag";
import SectionHeader from "./SectionHeader";

const renderActivity = (data) => {
  if (data != null)
    return data.map((item) => {
      return (
        <ActivityTag name={item.header} date={item.date} detail={item.detail} />
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

  useEffect(() => {
    fetchNote().then((data) => {
      setNote(data);
    });
  }, []);
  return (
    <div className="py-4 ">
      <SectionHeader name="Upcomming" emph="activities" />
      <ul>{renderActivity(note)}</ul>
    </div>
  );
};

export default Upcomming;
