import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { salesData, dashboardAnalytics } from "../data";
import OrderTable from "./OrderTable";
import PlatformStat from "./PlatformStat";
import Chart from "./Chart";

function Statistics() {
  return (
    <div className="p-[20px]">
      <div className="grid md:grid-cols-5 gap-4">
        {/* chart component */}
        <div className="md:col-span-3">
          <Chart />
        </div>
        {/* analytics */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
          {dashboardAnalytics.map((analytics) => (
            <AnalyticsCard key={analytics.id} analytics={analytics} />
          ))}
        </div>
        <div className="md:col-span-3">
          <OrderTable />
        </div>
        <div className="md:col-span-2">
          <PlatformStat />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
