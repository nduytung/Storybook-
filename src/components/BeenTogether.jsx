import Button from "./Button";
const BeenTogether = () => {
  return (
    <div className="text-white bg-gradient-to-r from-tomato via-coral to-yellow-400 container mx-auto px-2 text-center pb-20 ">
      <div className=" text-2xl py-20">Been together for </div>
      <div className="grid grid-cols-8">
        <div className="col-span-3">
          <div className="h-32 w-32 rounded-full border border-gray-500 border-dashed mx-auto">
            <img src="" alt="my avt " />
          </div>
          <div className="w-3/4 mx-auto">
            <Button name="Duy Tung" />
          </div>
        </div>
        <div className="flex flex-col col-span-2 text-2xl">
          <span className="text-4xl font-bold my-4">100</span>
          <span>days</span>
        </div>
        <div className="col-span-3">
          <div className="h-32 w-32 rounded-full border border-gray-500 border-dashed mx-auto">
            <img src="" alt="her avt " />
          </div>
          <div className="w-3/4 mx-auto">
            <Button name="To Quyen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeenTogether;
