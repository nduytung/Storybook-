import Flip from "react-reveal/Flip";
import { BsPencilSquare } from "react-icons/bs";
const SectionHeader = (props) => {
  const { name, emph } = props;

  return (
    <Flip bottom>
      <div className="text-center text-2xl font-light py-4">
        {name}
        <span className="text-purple ml-1">{emph}</span>
      </div>
    </Flip>
  );
};

export default SectionHeader;
