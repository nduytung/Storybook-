import Link from "next/link";
const Button = (props) => {
  const { name, link = "/" } = props;
  return (
    <div className="border border-white text-white bg-transparent rounded-full py-2 px-3 my-4 hover:bg-white hover:text-tomato">
      <Link href={link}>
        <button>{name}</button>
      </Link>
    </div>
  );
};

export default Button;
