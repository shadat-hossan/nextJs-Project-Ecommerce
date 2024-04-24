"use client";
import HomeTopBaner from "@/app/components/homeTopBaner/HomeTopBaner";
import "./home.css";

import TopBar from "@/app/components/topBar/TopBar";
import TopNavBar from "@/app/components/topNavbar/TopNavBar";
import FlashSales from "@/app/components/flashSales/FlashSales";
import Category from "@/app/components/category/Category";
import BestSelling from "@/app/components/bestSelling/BestSelling";
import DiscountBanner from "@/app/components/discountBanner/DiscountBanner";
import ExploreProduct from "@/app/components/exploreProduct/ExploreProduct";
import NewArrival from "@/app/components/newArrival/NewArrival";
import FreeServices from "@/app/components/freeService/FreeServices";
import Footer from "@/app/components/footer/Footer";

const Home = () => {
  return (
    <div>
      <TopBar />
      <TopNavBar />
      <div className="homePageMainComponents">
        <HomeTopBaner />
        <FlashSales />
        <Category />
        <BestSelling />
        <DiscountBanner />
        <ExploreProduct />
        <NewArrival />
        <FreeServices />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
