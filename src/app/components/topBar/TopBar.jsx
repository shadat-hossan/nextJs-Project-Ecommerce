"use client";
import "./topBar.css";
import Image from "next/image";

import safronLogo from "../../../../public/assets/logo.svg";
import wishlistIcon from "../../../../public/assets/wishlist_icon.svg";
import shopintIcon from "../../../../public/assets/cart_icon.svg";
import SearchIcon from "../../../../public/assets/icon_search.svg";
import userIcon from "../../../../public/assets/user-profile/profile-pic.jpeg";

import subUserIcon from "../../../../public/assets/user_icon.svg";
import subMallbagIcon from "../../../../public/assets/icon-mallbag.svg";
import subCancelIcon from "../../../../public/assets/icon-cancel.svg";
import subReviewsIcon from "../../../../public/assets/Icon-Reviews.svg";
import subLogoutIcon from "../../../../public/assets/Icon-logout.svg";

import { useState } from "react";
import Link from "next/link";

const TopBar = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <div className="row">
      <div className="topBar">
        <div className="topBarIcon" title="Safforn logo">
          <Image src={safronLogo} width={190} />
        </div>
        <div className="topBarSearch">
          <div className="topSearchBar">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <button className="topBarSearchSubmit">
              <Image src={SearchIcon} />
            </button>
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarRightItem" title="Wish">
            <Image
              className="topWishIcon"
              src={wishlistIcon}
              width={23}
              alt="topWishIcon"
            />
          </div>
          <div className="topBarRightItem" title="All add product">
            <Image
              className="topShopingIcon"
              src={shopintIcon}
              width={23}
              alt="topShopingIcon"
            />
            <div className="countShopingProdut">6</div>
          </div>
          <div
            className="topBarRightItem userProfile"
            title="Profile"
            onClick={toggleProfile}
          >
            <Image
              className="topUserIcon"
              src={userIcon}
              width={23}
              alt="topUserIcon"
            />
            <div
              className={`userProfileSubMenue ${
                openProfile ? "subMunueS24Active" : "subMunueS24"
              }`}
            >
              <ul>
                <li>
                  <Link href="#" className="subItemLink">
                    <Image src={subUserIcon} />
                    <p>Manage My Account</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="subItemLink">
                    <Image src={subMallbagIcon} />
                    <p>My Order</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="subItemLink">
                    <Image src={subCancelIcon} />
                    <p>My Cancellations</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="subItemLink">
                    <Image src={subReviewsIcon} />
                    <p>My Cancellations</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="subItemLink">
                    <Image src={subLogoutIcon} />
                    <p>Logout</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
