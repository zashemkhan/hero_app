import { Download } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AllApplications = ({ app }) => {


  const { title, image, ratingAvg, downloads,id } = app;

  return (
   <Link to={`/app-details/${id}`}>
    <div className="bg-[#ffffff] shadow-xl rounded-xl ">
      <div className="flex flex-col items-center   p-4 py- overflow-hidden ">
        <img
          className="h-70 w-full object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <h2 className="px-4 text-[#001931] text-xl font-medium">{title}</h2>
      <div className="flex items-center justify-between px-4 pb-5 mt-3 ">
        <div className="flex items-center gap-1 bg-[#f1f5e8] p-2 font-semibold text-[#00d390] rounded-lg px-4">
          <Download className="size-4" />
          <h3 className=" text-sm">{downloads} </h3>
        </div>
        <div className="flex gap-1 items-center bg-[#FFF0E1] text-[#FF8811]  p-2 rounded-lg px-4">
          <FaStar className="size-4" />
          <h3 className=" text-sm">{ratingAvg} </h3>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default AllApplications;
