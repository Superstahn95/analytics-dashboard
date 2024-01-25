import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { salesData, dashboardAnalytics } from "../data";
import OrderTable from "./OrderTable";

function Statistics() {
  return (
    <div className="p-[20px]">
      <div className="grid grid-cols-5 gap-4">
        {/* chart component */}
        <div className="col-span-3">Chart</div>
        {/* analytics */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {dashboardAnalytics.map((analytics) => (
            <AnalyticsCard key={analytics.id} analytics={analytics} />
          ))}
        </div>
        <div className="col-span-3">
          <OrderTable />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
