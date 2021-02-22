const Button = (props) => {
  const { name } = props;
  return (
    <div className="border border-white text-white bg-transparent rounded-full py-2 px-3 my-4 hover:bg-white hover:text-tomato">
      <button>{name}</button>
    </div>
  );
};

export default Button;
