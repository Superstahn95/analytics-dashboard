import WidgetWrapper from "./WidgetWrapper";
import Buy from "/svg/buy.svg";
import Sell from "/svg/sell.svg";
import Uptrend from "/svg/trending-up.svg";
import Downtrend from "/svg/trending-down.svg";

function AnalyticsCard({ analytics }) {
  console.log(analytics);
  return (
    <WidgetWrapper>
      {/* icon and mini chart */}
      <div className="flex items-center justify-between">
        <img src={analytics.url} alt="" />
        <img src={analytics.isIncrease ? Buy : Sell} alt="" />
      </div>
      <div className="mt-2">
        <p className="font-jakarta text-[#898989] capitalize text-[18px]">
          {analytics.description}
        </p>
        <span className="text-[#3A3F51] font-jakarta font-semibold text-[24px]">
          {analytics.number}
        </span>
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <div
          className={`${
            analytics.isIncrease ? "bg-[#34CAA5]/[12%]" : "bg-[#ED544E]/[12%]"
          } flex items-center justify-center space-x-1  w-[70px] rounded-xl p-[2px]`}
        >
          <img src={analytics.isIncrease ? Uptrend : Downtrend} alt="" />
          <span
            className={`${
              analytics.isIncrease ? "text-[#34CAA5]" : "text-[#ED544E]"
            } text-[12px] font-jakarta `}
          >
            {analytics.percentage}
          </span>
        </div>
        <div className=" p-[2px] ">
          <span className="font-inter text-[14px] text-[#606060] ">
            vs. previous month
          </span>
        </div>
      </div>
    </WidgetWrapper>
  );
}

export default AnalyticsCard;
