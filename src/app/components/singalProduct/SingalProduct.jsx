import "./singalProduct.css";

import Image from "next/image";

import product1 from "../../../../public/assets/product-image/gameControler.png";
import star from "../../../../public/assets/Icon/star.png";

const SingalProduct = ({ product }) => {
  const rootFile = process.env.VITE_REACT_APP_PUBLIC_FOLDER;

  const imgePath = rootFile + product.img;
  return (
    <>
      <div className="singalProduct">
        <div className="singalProductImageContainer">
          <div className="singalProductImageBox">
            <Image
              src={product.img}
              width={200}
              height={200}
              className="singalProductImage"
            />
          </div>
          <div className="singalProductDiscound">
            <p>-40%</p>
          </div>
          <div className="singalProductToggalManue">
            <div className="singalProductToggalManueItem">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                xmlns="http://www.w3.org/2000/svg"
                className="Favarite-icon"
              >
                <path
                  d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="singalProductToggalManueItem">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="singalProductAddToCard">Add To Cart</div>
        </div>
        <div className="singalProductInfo">
          <h4 className="singalProductName">{product.name}</h4>
          <div className="singalProductPrice">
            <p className="singalProductMainPrice">${product.mainPrice}</p>
            <p className="singalProductDiscoundPrice">
              <del>${product.discountPrice}</del>
            </p>
          </div>
          <div className="SingalProductreviewAllStar">
            <Image
              src={star}
              width={18}
              height={18}
              className="SingalProductreviewSingalStar"
            />
            <Image
              src={star}
              width={18}
              height={18}
              className="SingalProductreviewSingalStar"
            />
            <Image
              src={star}
              width={18}
              height={18}
              className="SingalProductreviewSingalStar"
            />
            <Image
              src={star}
              width={18}
              height={18}
              className="SingalProductreviewSingalStar"
            />
            <Image
              src={star}
              width={18}
              height={18}
              className="SingalProductreviewSingalStar"
            />
            <p className="countReviewNumber">({product.ratting})</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingalProduct;
