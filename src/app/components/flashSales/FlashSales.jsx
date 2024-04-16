"use client";
import Countdown from "../timeCountdown/Countdown";
import "./flashSales.css";

const FlashSales = () => {
  return (
    <div className="row flashSales">
      <div className="flashSalesTop">
        <div className="flashSalesTopTitle">
          <p className="flashSalesTopSubTitle">Today’s</p>
          <h3 className="flashSalesTopMainTitle">Flash Sales</h3>
        </div>
        <div className="flashSalesTopCountdown">
          <Countdown duration={6 * 24 * 60 * 60 * 1000} />
        </div>
      </div>
      <div className="flashSalesbottom">
        
      </div>
    </div>
  );
};

export default FlashSales;
