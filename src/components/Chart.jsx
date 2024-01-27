import { useState } from "react";
import { salesData } from "../data";
import {
  ComposedChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import WidgetWrapper from "./WidgetWrapper";
import useTheme from "../hooks/useTheme";
import ChartFilter from "./ChartFilter";
import CustomTooltip from "./CustomTooltip";
import CustomBar from "./CustomBar";

function Chart() {
  //state value of current value being read
  const [reading, setReading] = useState("month");
  const { theme } = useTheme();
  const axisLabelColor = theme === "dark" ? "white" : "#525252";
  // chart colors for both themes
  const defaultColor = "rgba(52, 202, 165, 0.1)";
  const darkModeBarColor = "rgba(52, 202, 165, 0.5)";

  const increment = 5000;
  const maxTick = 60000;
  const numberOfTicks = maxTick / increment;

  // Create an array of tick values for my y axis
  const ticks = Array.from(
    { length: numberOfTicks + 1 },
    (_, index) => index * increment
  );
  return (
    <WidgetWrapper>
      <div className="flex items-center justify-between min-w-[600px]">
        <span className="font-jakarta text-[14px] md:text-[18px] text-[#26282C] dark:text-white font-bold">
          Sales Trends
        </span>

        <div className="flex items-center space-x-2 ">
          <span className="text-[#3A3F51] font-jakarta text-[14px] dark:text-white">
            Sort By:{" "}
          </span>
          <ChartFilter reading={reading} setReading={setReading} />
        </div>
      </div>
      <div className="mt-7 min-w-[600px] ">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={salesData} className="w-full h-full">
            <Bar
              shape={<CustomBar />}
              dataKey="amount"
              fill={theme === "dark" ? darkModeBarColor : defaultColor}
            />

            <CartesianGrid
              stroke="#EAEAEA"
              vertical={false}
              strokeDasharray="5 5"
            />
            <XAxis
              dataKey={reading}
              tickLine={false}
              axisLine={{ strokeDasharray: "5 5", stroke: "#EAEAEA" }}
              tick={{ fill: axisLabelColor }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={ticks}
              tick={{ fill: axisLabelColor }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </WidgetWrapper>
  );
}

export default Chart;
