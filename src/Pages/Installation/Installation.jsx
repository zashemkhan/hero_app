import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortApp, setSortApp] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installed"));
    if (saveList) setInstalled(saveList);
  }, []);

  const parseDownloads = (downloads) => {
    if (downloads.endsWith("k")) {
      return parseFloat(downloads) * 1000;
    } else if (downloads.endsWith("M")) {
      return parseFloat(downloads) * 1000000;
    } else {
      return parseFloat(downloads);
    }
  };
  const sortedItem = () => {
    if (sortApp === "download-asc") {
      return [...installed].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortApp === "download-desc") {
      return [...installed].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return installed;
    }
  };

  const handleUninstall = (id, title) => {
    const updatedList = installed.filter((app) => app.id !== id);
    setInstalled(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    toast(` ${title} Uninstalled from your Device`, { icon: <FaTrashAlt /> });
  };

  return (
    <div className=" py-10 lg:py-20 min-h-scree w-11/12 mx-auto ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="">
        <div className="text-center">
          <h3 className="text-[#001931] text-3xl lg:text-5xl font-bold">
            Your Installed Apps
          </h3>
          <p className="text-[#627382] text-sm lg:text-xl mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center py-4 mt-8">
          <h3 className="lg:text-xl text-lg font-semibold ext-[#001931]">
            <span>{installed.length}</span> Apps Found
          </h3>
          <label className="form-control  max-w-xs">
            <select
              value={sortApp}
              onChange={(e) => setSortApp(e.target.value)}
              className="select select-bordered text-[#627382] text-sm "
            >
              <option value="none">Sort By Size</option>
              <option value="download-asc">Low-&gt;High</option>
              <option value="download-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
        <div className="space-y-6">
          {sortedItem().map((app) => (
            <div className="flex gap-6 items-center justify-between rounded-md shadow-sm bg-[#ffffff] p-3 lg:p-5">
              <div className="flex items-center gap-4">
                <div className=" overflow-hidden">
                  <img
                    className="w-20 h-full object-cover rounded-lg"
                    src={app.image}
                    alt={app.title}
                  />
                </div>
                <div>
                  <div>
                    <h2 className="text-xl font-semibold">{app.title}</h2>
                    <div className="flex items-center justify-between gap-5  mt-3 ">
                      <div className="flex items-center gap-1  font-semibold text-[#00d390]  ">
                        <Download className="size-4" />
                        <h3 className=" text-sm">{app.downloads} </h3>
                      </div>
                      <div className="flex gap-1 items-center text-[#FF8811]">
                        <FaStar className="size-4" />
                        <h3 className=" text-sm">{app.ratingAvg} </h3>
                      </div>
                      <div className="text-[#627382] text-sm">{app.size}MB</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="text-[#ffffff] text-sm lg:text-base font-semibold bg-[#00d390] p-3 px-4 rounded-lg "
                  onClick={() => handleUninstall(app.id, app.title)}
                >
                  UnInstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
