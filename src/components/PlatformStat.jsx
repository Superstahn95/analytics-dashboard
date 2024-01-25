import React from "react";
import WidgetWrapper from "./WidgetWrapper";
import { platformData } from "../data";
import ProgressBar from "@ramonak/react-progress-bar";
function PlatformStat() {
  return (
    <WidgetWrapper>
      <div className="flex items-center justify-between ">
        <span className="font-jakarta text-[18px] text-[#26282C] font-bold">
          Top Platform
        </span>
        <span className="font-jakarta text-[18px] text-[#34CAA5]">See All</span>
      </div>
      {platformData.map((platform) => (
        <div key={platform.id}>
          <h3 className="font-jakarta text-[18px] text-[#22242C] mt-2">
            {platform.name}
          </h3>
          <ProgressBar
            completed={platform.progressBarPercentage}
            maxCompleted={100}
            className="w-full h-[12px] my-4"
            bgColor={platform.hexColor}
            isLabelVisible={false}
            barContainerClassName="bg-[#F5F5F5] h-[12px ] rounded-xl"
            // completedClassName="barCompleted"
            // labelClassName="label"
          />
          <div className="flex items-center justify-between">
            <span className="text-[#525252] font-jakarta text-[18px]">
              {platform.amount}
            </span>
            <span className="text-[#525252] font-jakarta text-[18px]">
              {platform.percentageIncrease}
            </span>
          </div>
        </div>
      ))}
    </WidgetWrapper>
  );
}

export default PlatformStat;
