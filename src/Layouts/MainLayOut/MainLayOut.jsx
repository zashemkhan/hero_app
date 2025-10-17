import React from "react";
import NavBar from "../../COmponents/NavBar/NavBar";
import Footer from "../../COmponents/Footer/Footer";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex-1 bg-[#D9D9D950]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
