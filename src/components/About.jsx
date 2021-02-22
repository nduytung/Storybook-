const About = (props) => {
  const { name, dob, color, number, dislike, note } = props;
  return (
    <div>
      <div className="bg-gradient-to-r from-tomato via-coral to-yellow-400 h-48 "></div>
      <div className="w-36 h-36 rounded-full bg-white mx-auto -mt-20"></div>

      <span className="text-tomato text-2xl font-bold my-3 px-2">
        Information
      </span>
      <div className="border border-gray-200 rounded-xl mx-2 my-4 leading-14 px-4 ">
        <div className="">Name: {name}</div>
        <hr /> <div className="">DOB: {dob}</div>
        <hr /> <div className="">Color: {color}</div>
        <hr /> <div className="">Number: {number}</div>
        <hr /> <div className="">Dislike: {dislike}</div>
        <hr /> <div className="">Note: {note}</div>
        <hr />
      </div>
    </div>
  );
};

export default About;
