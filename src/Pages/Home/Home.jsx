import { Link } from "react-router";
import TrendingApps from "./TrendingApps/TrendingApps";
import useApps from "../../Hooks/useApps";

const Home = () => {
  const [apps] = useApps();
  const trendingApps = apps.slice(0, 8);

  return (
    <div className="py-10 lg:py-20">
      <div className="pb-10 space-y-3">
        <h2 className="text-center text-3xl lg:text-4xl text-[#001931] font-bold">
          Trending Apps
        </h2>
        <p className="text-center text-sm lg:text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 max-w-11/12 mx-auto ">
        {trendingApps.map((app) => (
          <TrendingApps key={app.id} app={app}></TrendingApps>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/apps"
          className=" bg-gradient-to-l from-[#9f62f2] to-[#632ee3] px-8 py-3 rounded-lg text-[#ffffff] font-semibold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
