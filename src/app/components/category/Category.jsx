import "./category.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import category from "@/app/dameData2.js";
import Image from "next/image";

const Category = () => {
  return (
    <div className="row category-container">
      <div className="categoryTitle">
        <div className="flashSalesTopTitle">
          <p className="flashSalesTopSubTitle">Categories</p>
          <h3 className="flashSalesTopMainTitle">Browse By Category</h3>
        </div>
      </div>
      <div className="allCategoryItem">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {category.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="singalCategoryItem">
                <div className="singalCategoryImageBox">
                  <Image src={item.SVGimage} width={56} height={56} />
                </div>
                <h5 className="singalCategoryName">{item.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
