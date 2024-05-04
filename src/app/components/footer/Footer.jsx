import "./footer.css";

import Qrcode from "../../../../public/assets/Icon/Qrcode.png";
import GooglePlay from "../../../../public/assets/Icon/GooglePlay.png";
import AppStore from "../../../../public/assets/Icon/AppStore.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="footerAllItem">
          <div className="footerSingalItemBox">
            <h3 className="footerSingalItemBoxTitle">Exclusive</h3>
            <ul className="footerAllItemLink">
              <li className="footerSingalItemLink">Subscribe</li>
              <li className="footerSingalItemLink">
                Get 10% off your first order
              </li>
              <li className="footerSingalItemLink emailSubmit">
                <input type="email" placeholder="Enter your email" />
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="submit-icon"
                  >
                    <path
                      d="M9.91196 12H3.99996L2.02296 4.13505C2.0103 4.08934 2.00259 4.0424 1.99996 3.99505C1.97796 3.27405 2.77196 2.77405 3.45996 3.10405L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9658 2.0131 19.9031 2.03296 19.843L3.49996 15"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div className="footerSingalItemBox">
            <h3 className="footerSingalItemBoxTitle">Support</h3>
            <ul className="footerAllItemLink">
              <li className="footerSingalItemLink">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li className="footerSingalItemLink">exclusive@gmail.com</li>
              <li className="footerSingalItemLink">+88015-88888-9999</li>
            </ul>
          </div>
          <div className="footerSingalItemBox">
            <h3 className="footerSingalItemBoxTitle">Account</h3>
            <ul className="footerAllItemLink">
              <li className="footerSingalItemLink">My Account</li>
              <li className="footerSingalItemLink">Login / Register</li>
              <li className="footerSingalItemLink">Cart</li>
              <li className="footerSingalItemLink">Wishlist</li>
              <li className="footerSingalItemLink">Shop</li>
            </ul>
          </div>
          <div className="footerSingalItemBox">
            <h3 className="footerSingalItemBoxTitle">Quick Link</h3>
            <ul className="footerAllItemLink">
              <li className="footerSingalItemLink">Privacy Policy</li>
              <li className="footerSingalItemLink">Terms Of Use</li>
              <li className="footerSingalItemLink">FAQ</li>
              <li className="footerSingalItemLink">Contact</li>
            </ul>
          </div>
          <div className="footerSingalItemBox">
            <h3 className="footerSingalItemBoxTitle">Download App</h3>
            <ul className="footerAllItemLink">
              <li className="footerSingalItemLink">
                Save $3 with App New User Only
              </li>
              <li className="footerSingalItemLink footerApplink">
                <div className="footerQRcode">
                  <Image src={Qrcode} height={76} width={76} />
                </div>
                <div className="footerMobileAppLink">
                  <Image src={GooglePlay} width={104} height={30} />
                  <Image src={AppStore} width={104} height={30} />
                </div>
              </li>
              <li className="footerSingalItemLink footerSocialLink">
                <div className="footerSocialLinkSongalItem">
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7H10.5L10 9H6V18H4V9H0V7H4V5.128C4 3.345 4.186 2.698 4.534 2.046C4.87501 1.40181 5.40181 0.875009 6.046 0.534C6.698 0.186 7.345 0 9.128 0C9.65 0 10.108 0.0500001 10.5 0.15V2H9.128C7.804 2 7.401 2.078 6.99 2.298C6.686 2.46 6.46 2.686 6.298 2.99C6.078 3.401 6 3.804 6 5.128V7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footerSocialLinkSongalItem">
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.905 4.84651L10.905 4.84646C10.9194 4.06035 11.2418 3.3113 11.8028 2.76049C12.3639 2.20969 13.1188 1.90116 13.905 1.90129L10.905 4.84651ZM10.905 4.84651L10.877 6.42135M10.905 4.84651L10.877 6.42135M2.75811 3.80857L2.89001 3.91846C4.76679 5.48211 6.71781 6.41823 8.74946 6.6952C8.74947 6.6952 8.74949 6.6952 8.74951 6.6952L10.3104 6.90718L2.75811 3.80857ZM2.75811 3.80857L2.72759 3.97751M2.75811 3.80857L2.72759 3.97751M2.72759 3.97751C2.42576 5.64819 2.5683 7.07086 3.1479 8.30176C3.72718 9.53198 4.73827 10.5605 6.15577 11.4519L6.15579 11.452M2.72759 3.97751L6.15579 11.452M6.15579 11.452L7.90279 12.55L7.954 12.4685M6.15579 11.452L7.954 12.4685M7.954 12.4685L7.90279 12.55C7.97196 12.5934 8.02943 12.6532 8.07016 12.724C8.1109 12.7948 8.13366 12.8745 8.13645 12.9562C8.13925 13.0378 8.122 13.1189 8.0862 13.1924C8.05041 13.2658 7.99716 13.3294 7.93112 13.3775L7.93101 13.3775M7.954 12.4685L7.93101 13.3775M7.93101 13.3775L6.33901 14.5405L6.11542 14.7039M7.93101 13.3775L6.11542 14.7039M6.11542 14.7039L6.39178 14.7211M6.11542 14.7039L6.39178 14.7211M6.39178 14.7211C7.3449 14.7805 8.25288 14.7385 9.00946 14.5884L9.00958 14.5884M6.39178 14.7211L9.00958 14.5884M9.00958 14.5884C11.3886 14.1134 13.3745 12.9794 14.7652 11.2211M9.00958 14.5884L14.7652 11.2211M10.877 6.42135C10.8757 6.49182 10.8594 6.5612 10.8293 6.62495C10.7993 6.6887 10.7561 6.74537 10.7026 6.79125C10.649 6.83712 10.5864 6.87117 10.5188 6.89115C10.4513 6.91112 10.3803 6.91659 10.3105 6.9072L10.877 6.42135ZM14.7652 11.2211C16.1557 9.46296 16.945 7.08835 16.945 4.14229M14.7652 11.2211L16.945 4.14229M16.945 4.14229C16.945 3.99668 16.8714 3.78474 16.744 3.55722M16.945 4.14229L16.744 3.55722M16.744 3.55722C16.6142 3.32559 16.4215 3.06508 16.1673 2.82049M16.744 3.55722L16.1673 2.82049M16.1673 2.82049C15.6587 2.33088 14.8999 1.90129 13.905 1.90129L16.1673 2.82049ZM18.4978 1.53842C18.8818 1.48388 19.3285 1.34345 19.916 1.01105C19.6101 2.49526 19.4321 3.16764 18.7642 4.08336L18.745 4.10969V4.14229C18.745 7.94153 17.578 10.7567 15.8258 12.7397C14.0726 14.7238 11.7277 15.8813 9.36243 16.3532C7.74529 16.6759 5.7544 16.5728 3.99643 16.2106C3.11813 16.0296 2.30077 15.7846 1.61983 15.4974C1.03727 15.2517 0.560091 14.9775 0.229559 14.6904C0.660648 14.6482 1.4114 14.5535 2.24366 14.3598C3.24355 14.1272 4.37173 13.7494 5.20306 13.141L5.31918 13.056L5.19904 12.9768C5.15724 12.9492 5.11178 12.9196 5.06301 12.8879C4.30477 12.3938 2.74648 11.3786 1.73155 9.51655C0.667136 7.56374 0.192566 4.66295 1.91362 0.425918C3.57889 2.34347 5.2726 3.66001 6.99504 4.3668L6.99505 4.36681C7.57662 4.60536 7.94255 4.72373 8.23185 4.79141C8.45087 4.84265 8.62608 4.86463 8.81173 4.88794C8.87034 4.89529 8.92998 4.90278 8.99238 4.91135L9.28722 4.95189L9.10594 4.77077C9.13096 3.8414 9.42538 2.93895 9.95386 2.17331C10.4904 1.39606 11.2442 0.79434 12.1211 0.443497C12.9979 0.0926537 13.9588 0.00827681 14.8833 0.200931C15.8079 0.393585 16.6551 0.854708 17.3189 1.52657L17.3485 1.55658L17.3907 1.55628C17.4934 1.55556 17.5972 1.55908 17.7036 1.56269C17.9483 1.57098 18.2068 1.57974 18.4978 1.53842Z"
                      fill="white"
                      stroke="black"
                      stroke-width="0.2"
                    />
                  </svg>
                </div>
                <div className="footerSocialLinkSongalItem">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footerSocialLinkSongalItem">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
