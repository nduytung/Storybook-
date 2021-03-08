import BeenTogether from "../components/BeenTogether";
import Upcomming from "./Upcomming";
import Landmark from "./Landmark";

const MainPage = () => {
  return (
    <div className="">
      <BeenTogether />
      <div className="bg-white w-full -mt-8 rounded-3xl">
        <Upcomming />
        <Landmark />
      </div>
    </div>
  );
};

export default MainPage;
