import "./freeService.css";
import carIcin from "../../../../public/assets/Icon/car.svg";
import Hadphone from "../../../../public/assets/Icon/Hadphone.svg";
import secure from "../../../../public/assets/Icon/secure.svg";
import Image from "next/image";

const FreeServices = () => {
  return (
    <div className="row freeService-container">
      <div className="freeServiceAllItem">
        <div className="freeServiceSingalItem">
          <div className="freeServiceSingalItemIcon">
            <Image src={carIcin} width={40} height={40} />
          </div>
          <h3 className="freeServiceSingalItemName">FREE AND FAST DELIVERY</h3>
          <p className="freeServiceSingalItemDesc">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="freeServiceSingalItem">
          <div className="freeServiceSingalItemIcon">
            <Image src={Hadphone} width={40} height={40} />
          </div>
          <h3 className="freeServiceSingalItemName">24/7 CUSTOMER SERVICE</h3>
          <p className="freeServiceSingalItemDesc">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="freeServiceSingalItem">
          <div className="freeServiceSingalItemIcon">
            <Image src={secure} width={40} height={40} />
          </div>
          <h3 className="freeServiceSingalItemName">MONEY BACK GUARANTEE</h3>
          <p className="freeServiceSingalItemDesc">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeServices;
