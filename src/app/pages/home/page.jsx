"use client";
import HomeTopBaner from "@/app/components/homeTopBaner/HomeTopBaner";
import "./home.css";

import TopBar from "@/app/components/topBar/TopBar";
import TopNavBar from "@/app/components/topNavbar/TopNavBar";
import FlashSales from "@/app/components/flashSales/FlashSales";
import Category from "@/app/components/category/Category";

const Home = () => {
  return (
    <div>
      <TopBar />
      <TopNavBar />
      <div className="homePageMainComponents">
        <HomeTopBaner />
        <FlashSales />
        <Category />
      </div>
    </div>
  );
};

export default Home;
