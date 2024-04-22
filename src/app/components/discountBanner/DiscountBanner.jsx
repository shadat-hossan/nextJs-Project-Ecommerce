import "./discountBanner.css";
import Countdown from "../timeCountdown/Countdown";
import Image from "next/image";

import discoundProduct from "../../../../public/assets/AllPoduct/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

const DiscountBanner = () => {
  return (
    <div className="row discountBanner-container">
      <div className="discountBannerLeft">
        <p className="discountBannerCategorie">Categories</p>
        <h2 className="discountBannerProductTitle">
          Enhance Your Music Experience
        </h2>
        <div className="discountBannerTimecount">
          <Countdown duration={3 * 24 * 60 * 60 * 1000} />
        </div>
        <div className="discountBannerBaynowBtn">
          <p>Buy Now!</p>
        </div>
      </div>
      <div className="discountBannerRight">
        <div className="discountBannerRightImageBox">
          <Image
            src={discoundProduct}
            width={568}
            height={330}
            className="discountBannerRightImage"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
