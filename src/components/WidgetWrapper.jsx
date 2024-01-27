import React from "react";

//reusable widget wrapper for widgets in the dashboard
function WidgetWrapper({ children }) {
  return (
    <div className="p-2 rounded-[14px] bg-white shadow-md dark:bg-slate-800 dark:text-white overflow-x-scroll">
      {children}
    </div>
  );
}

export default WidgetWrapper;
