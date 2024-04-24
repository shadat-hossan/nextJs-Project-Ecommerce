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
                .footerMobileAppLink
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
