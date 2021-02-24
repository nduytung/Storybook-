import Flip from "react-reveal/Flip";

const SectionHeader = (props) => {
  const { name, emph } = props;

  return (
    <Flip bottom>
      <div className="text-center text-2xl py-4">
        {name}
        <span className="text-tomato ml-1">{emph}</span>
      </div>
    </Flip>
  );
};

export default SectionHeader;
