const SectionHeader = (props) => {
  const { name, emph } = props;

  return (
    <div className="text-center text-2xl">
      {name}
      <span className="text-tomato ml-1">{emph}</span>
    </div>
  );
};

export default SectionHeader;
