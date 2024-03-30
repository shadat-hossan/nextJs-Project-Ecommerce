"use client";
import HomeTopBaner from "@/app/components/homeTopBaner/HomeTopBaner";
import "./home.css";

import TopBar from "@/app/components/topBar/TopBar";
import TopNavBar from "@/app/components/topNavbar/TopNavBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <TopNavBar />
      <div className="homePageMainComponents">
        <HomeTopBaner />
      </div>
    </div>
  );
};

export default Home;
