"use client";
import "./flashSales.css";

import Countdown from "../timeCountdown/Countdown";
import SingalProduct from "../singalProduct/SingalProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import product from "@/app/dameData.js";

const FlashSales = () => {
  return (
    <div className="row flashSales">
      <div className="flashSalesTop">
        <div className="flashSalesTopTitle">
          <p className="flashSalesTopSubTitle">Today’s</p>
          <h3 className="flashSalesTopMainTitle">Flash Sales</h3>
        </div>
        <div className="flashSalesTopCountdown">
          <Countdown duration={6 * 24 * 60 * 60 * 1000} />
        </div>
      </div>
      <div className="flashSalesbottom">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {product.map((item, index) => (
            <SwiperSlide key={index}>
              <SingalProduct product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="commonButton flex-center flashSalesMorBtn">
        <p>View All Products</p>
      </div>
    </div>
  );
};

export default FlashSales;
