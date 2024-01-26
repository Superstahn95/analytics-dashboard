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

const CustomBar = (props) => {
  const { x, y, width, height } = props;
  const curveHeight = 30;

  return (
    <path
      d={`M${x},${y} Q${x + width / 2},${y - curveHeight} ${x + width},${y} L${
        x + width
      },${y + height} L${x},${y + height} Z`}
      fill={props.fill}
    />
  );
};

function Chart() {
  const [reading, setReading] = useState("month");
  const barColor = "#34CAA5";
  const barOpacity = 0.1;
  const maxReading = Math.max(...salesData.map((entry) => entry.amount));

  const { theme } = useTheme();
  const axisLabelColor = theme === "dark" ? "white" : "#525252";
  // Specify your colors
  const defaultColor = "rgba(52, 202, 165, 0.1)"; // Default color for bars with 10% opacity
  const highlightColor = "#34CAA5"; // Color for the bar with the longest reading

  const increment = 5000;
  const maxTick = 60000;
  const numberOfTicks = maxTick / increment;

  // Create an array of tick values
  const ticks = Array.from(
    { length: numberOfTicks + 1 },
    (_, index) => index * increment
  );
  return (
    <WidgetWrapper>
      <div className="flex items-center justify-between ">
        <span className="font-jakarta text-[18px] text-[#26282C] dark:text-white font-bold">
          Sales Trends
        </span>

        <div className="flex items-center space-x-2">
          <span>Sort By: </span>
          <ChartFilter reading={reading} setReading={setReading} />
        </div>
      </div>
      <div className="mt-7">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            //   width=""
            //   width={800}
            //   height={300}
            data={salesData}
            className="w-full h-full"
          >
            {/* <Bar
              dataKey="amount"
                fill={`${barColor}${Math.round(barOpacity * 255).toString(16)}`}
              fill={defaultColor}
              barSize={30}
            /> */}
            <Bar shape={<CustomBar />} dataKey="amount" fill={defaultColor} />

            <CartesianGrid
              stroke="#EAEAEA"
              vertical={false}
              strokeDasharray="5 5"
            />
            <XAxis
              dataKey={reading}
              tickLine={false}
              //   tick={{ fill: "#525252" }}
              axisLine={{ strokeDasharray: "5 5" }}
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
// #34CAA5
//#EAEAEA
export default Chart;
