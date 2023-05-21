import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";
import FooterSection from "../components/Shared/FooterSection/FooterSection";

const Main = () => {
  return (
    <div className="bg-[#E9F8FF]">
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default Main;
