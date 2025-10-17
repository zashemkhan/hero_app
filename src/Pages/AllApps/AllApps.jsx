import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import AllApplications from "./AllApplications";

const AllApps = () => {
  const [apps] = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title?.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="   lg:py-20  py-10 ">
      <div className=" max-w-11/12 mx-auto">
        <div className="pb-10 space-y-3">
          <h2 className="text-center text-3xl lg:text-4xl text-[#001931] font-bold">
            Our All Applications
          </h2>
          <p className="text-center text-sm lg:text-xl  text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center py-4">
          <h3 className="lg:text-xl text-lg font-semibold ext-[#001931]">
            <span>({searchedApps.length})</span> Apps Found
          </h3>
          <label className="input bg-transparent w-50 lg:w-xl ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8  ">
          {searchedApps.map((app) => (
            <AllApplications key={app.id} app={app}></AllApplications>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
