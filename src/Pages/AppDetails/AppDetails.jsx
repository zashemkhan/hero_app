import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import like from "../../assets/fi_17817684.png";
import download from "../../assets/fi_18110198.png";
import star from "../../assets/fi_1828884.png";
import { toast, ToastContainer } from "react-toastify";
import RechartData from "../RechartData/RechartData";


const AppDetails = () => {
  const { id } = useParams();
  const [apps, loading] = useApps();
  const [allReadyInstalled, setAllReadyInstalled] = useState(false);

  const detailsApp = apps?.find((app) => String(app.id) === id) || {};
  if (loading) return <p>loadiing................</p>;

  const {
    title,
    image,
    ratingAvg,
    downloads,
    reviews,
    companyName,
    size,
    description,
  } = detailsApp;

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const isInstalled = existingList.some((app) => app.id === detailsApp.id);
    setAllReadyInstalled(isInstalled);
  }, [detailsApp]);

  const handleInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const isDuplicate = existingList.some((app) => app.id === detailsApp.id);
    if (!isDuplicate) {
      const updatedList = [...existingList, detailsApp];
      localStorage.setItem("installed", JSON.stringify(updatedList));
      setAllReadyInstalled(true);
      toast.success(`Yahoo ⚡!! ${title} Installed Successfully`);
    }
  };
  return (
    <div className="lg:py-20 py-10 w-11/12 mx-auto ">
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

      <div className="flex flex-col lg:flex-row gap-8  ">
        <div className="lg:shadow-lg overflow-hidden ">
          <img
            className="lg:w-80 lg:h-full w-70 h-full object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex-1 ">
          <div className="">
            <h3 className="text-[#001931] text-4xl font-bold">{title}</h3>
            <div className="pb-1 mb-2 ">
              <p className="mt-2 text-[#627382]">
                Developed by{" "}
                <span className="text-[#632EE3] font-semibold">
                  {companyName}
                </span>
              </p>
              <hr className=" w-full  border-b border-0 border-[#00193120] mt-8 " />
            </div>
          </div>
          <div className="flex items-center gap-8 lg:gap-16 mt-5 lg:mt-8 text-[#001931] ">
            <div className="">
              <img className="lg:w-8 lg:h-8 w-7 h-7" src={download} alt="" />
              <p className="my-2 ">Downloads</p>
              <p className="lg:text-4xl text-3xl font-extrabold">{downloads}</p>
            </div>
            <div>
              <img className="lg:w-8 lg:h-8 w-7 h-7" src={star} alt="" />
              <p className="my-2">Average Ratings</p>
              <p className="lg:text-4xl text-3xl font-extrabold">{ratingAvg}</p>
            </div>
            <div className="">
              <img className="lg:w-8 lg:h-8 w-7 h-7"src={like} alt="" />
              <p className="my-2">Total Reviews</p>
              <p className="lg:text-4xl text-3xl font-extrabold">{reviews}</p>
            </div>
          </div>
          <button
            onClick={handleInstallation}
            disabled={allReadyInstalled}
            className="text-[#ffffff] lg:text-xl font-semibold bg-[#00d390] p-3 px-4 rounded-lg mt-8 "
          >
            {allReadyInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="font-semibold text-2xl mb-3">Ratings</h2>
         <RechartData detailsApp={detailsApp}/>
      </div>
      <div className=" mt-10 ">
        <h2 className="text-[#001931] text-2xl font-semibold mb-2">
          Description
        </h2>
        <span className="text-[#627382] lg:text-xl">{description}</span>
      </div>
     
    </div>
  );
};
export default AppDetails;
