import Image from "next/image";
import "./newArrival.css";

import PlayStation from "../../../../public/assets/AllPoduct/PlayStation 5.png";
import Speakers from "../../../../public/assets/AllPoduct/Speakers.png";
import Women from "../../../../public/assets/AllPoduct/Women’s Collections.png";
import Laptop from "../../../../public/assets/AllPoduct/ASUS FHD Gaming Laptop.png";

const NewArrival = () => {
  return (
    <div className="row newArrival-container">
      <div className="newArrivalTitle">
        <div className="flashSalesTopTitle">
          <p className="flashSalesTopSubTitle">Featured</p>
          <h3 className="flashSalesTopMainTitle">New Arrival</h3>
        </div>
      </div>
      <div className="newArrivalGallery">
        <div className="newArrivalGalleryLeft">
          <div className="newArrivalGalleryItem">
            <div className="newArrivalGalleryImageBox ">
              <Image
                src={PlayStation}
                width={511}
                height={511}
                className="newArrivalGalleryImage"
                alt="PlayStation 5"
              />
            </div>
            <div className="newArrivalGalleryItemInfo">
              <h4 className="newArrivalGalleryItemName">PlayStation 5</h4>
              <p className="newArrivalGalleryItemDesc">
                Black and White version of the PS5 coming out on sale.
              </p>
              <div className="newArrivalGalleryItemMor">
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="newArrivalGalleryRight">
          <div className="newArrivalGalleryRightTop">
            <div className="newArrivalGalleryItem">
              <div className="newArrivalGalleryImageBox DfarPosition">
                <Image
                  src={Women}
                  width={431}
                  height={286}
                  className="newArrivalGalleryImage"
                  alt="Women’s Collections"
                />
              </div>
              <div className="newArrivalGalleryItemInfo">
                <h4 className="newArrivalGalleryItemName">
                  Women’s Collections
                </h4>
                <p className="newArrivalGalleryItemDesc">
                  Featured woman collections that give you another vibe.
                </p>
                <div className="newArrivalGalleryItemMor">
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="newArrivalGalleryRightButtom">
            <div className="newArrivalGalleryItem Dheight">
              <div className="newArrivalGalleryImageBox">
                <Image
                  src={Speakers}
                  width={190}
                  height={221}
                  className="newArrivalGalleryImage"
                  alt="Women’s Collections"
                />
              </div>
              <div className="newArrivalGalleryItemInfo">
                <h4 className="newArrivalGalleryItemName">Speakers</h4>
                <p className="newArrivalGalleryItemDesc">
                  Amazon wireless speakers
                </p>
                <div className="newArrivalGalleryItemMor">
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
            <div className="newArrivalGalleryItem Dheight">
              <div className="newArrivalGalleryImageBox ">
                <Image
                  src={Laptop}
                  width={190}
                  height={221}
                  className="newArrivalGalleryImage"
                  alt="Women’s Collections"
                />
              </div>
              <div className="newArrivalGalleryItemInfo">
                <h4 className="newArrivalGalleryItemName">Gaming Laptop</h4>
                <p className="newArrivalGalleryItemDesc">
                  GUCCI INTENSE OUD EDPe.
                </p>
                <div className="newArrivalGalleryItemMor">
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
