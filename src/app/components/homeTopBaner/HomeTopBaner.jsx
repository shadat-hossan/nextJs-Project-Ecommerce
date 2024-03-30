import { Swiper, SwiperSlide } from "swiper/react";

import "./homeTopBaner.css";
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../../../public/assets/banner/banner-1-new.jpg";
import banner2 from "../../../../public/assets/banner/banner-2-new.jpg";
import banner3 from "../../../../public/assets/banner/banner-3-new.jpg";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import EastIcon from "@mui/icons-material/East";

const HomeTopBaner = () => {
  return (
    <div className="row homeTopBaner">
      <Swiper
        loop={true}
        pagination={true}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className="SingalBaner">
          <Image className="slidereImage" src={banner1} />
          <div className="banerInfo">
            <h4>Inkjet Printers</h4>
            <h1>Up to 10% off Voucher</h1>
            <p>
              Shop Now <EastIcon />{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SingalBaner">
          <Image className="slidereImage" src={banner2} />
          <div className="banerInfo">
            <h4>Inkjet Printers</h4>
            <h1>Up to 20% off Voucher</h1>
            <p>
              Shop Now <EastIcon />{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SingalBaner">
          <Image className="slidereImage" src={banner3} />
          <div className="banerInfo">
            <h4>Inkjet Printers</h4>
            <h1>Up to 25% off Voucher</h1>
            <p>
              Shop Now <EastIcon />{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeTopBaner;
