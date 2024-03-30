import "./topNavBar.css";
import Image from "next/image";

import homeIcon from "../../../../public/assets/icon_home.svg";
import shopIcon from "../../../../public/assets/icon_shop.svg";
import offerIcon from "../../../../public/assets/icon_offer.svg";
import bagIcon from "../../../../public/assets/icon_shop2.svg";
import hadePhoneIcon from "../../../../public/assets/customer-service-2-fill.svg";

import { DensityMedium } from "@mui/icons-material";

const TopNavBar = () => {
  return (
    <div className="topNavBar">
      <div className="row">
        <div className="topNavBarContainer">
          <div className="topNavBarLeft">
            <ul className="topNavBarLeftAllItem">
              <li
                className="topNavBarLeftSingalItem categories"
                title="Categories"
              >
                <DensityMedium className="categoriesIcon" />
                <p>All Categories</p>
              </li>
              <li className="topNavBarLeftSingalItem" title="Home">
                <Image className="homeIcon" src={homeIcon} alt="HomeIcon" />
                <p>Home</p>
              </li>
              <li className="topNavBarLeftSingalItem" title="Shop">
                <Image className="shopIcon" src={shopIcon} alt="ShopIcon" />
                <p>Shop</p>
              </li>
              <li className="topNavBarLeftSingalItem" title="Offers">
                <Image className="offerIcon" src={offerIcon} alt="OfferIcon" />
                <p>Your offer</p>
              </li>
              <li className="topNavBarLeftSingalItem" title="Your Shop">
                <Image className="BagIcon" src={bagIcon} alt="BagIcon" />
                <p>My shop</p>
              </li>
            </ul>
          </div>
          <div className="topNavBarHelpLine" title="Help Line">
            <Image
              className="hadePhoneIcon"
              src={hadePhoneIcon}
              alt="HedePhoneIcon"
            />
            <p>16890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
