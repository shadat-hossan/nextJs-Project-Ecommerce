import "./exploreProduct.css";

import SingalProduct from "../singalProduct/SingalProduct";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import product from "@/app/dameData.js";

const ExploreProduct = () => {
  return (
    <div className="row exploreProduct-container">
      <div className="exploreProductTitle">
        <div className="flashSalesTopTitle">
          <p className="flashSalesTopSubTitle">Our Products</p>
          <h3 className="flashSalesTopMainTitle">Explore Our Products</h3>
        </div>
      </div>
      <div className="allExploreProduct">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          grid={{
            rows: 2,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {product.map((item, index) => (
            <SwiperSlide key={index}>
              <SingalProduct product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="commonButton flex-center exploreProductMorBtn">
        <p>View All Products</p>
      </div>
    </div>
  );
};

export default ExploreProduct;
