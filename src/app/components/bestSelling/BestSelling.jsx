import "./bestSelling.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import product from "@/app/dameData.js";
import SingalProduct from "../singalProduct/SingalProduct";

const BestSelling = () => {
  return (
    <div className="row bestSelling-container">
      <div className="bestSellingTitle">
        <div className="flashSalesTopTitle">
          <p className="flashSalesTopSubTitle">This Month</p>
          <h3 className="flashSalesTopMainTitle">Best Selling Products</h3>
        </div>
        <div class="commonButton">
          <p>View All</p>
        </div>
      </div>
      <div className="bestSellingProduct">
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
    </div>
  );
};

export default BestSelling;
