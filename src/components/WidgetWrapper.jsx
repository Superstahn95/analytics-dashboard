import React from "react";

function WidgetWrapper({ children }) {
  return <div className="p-[20px] shadow-md">{children}</div>;
}

export default WidgetWrapper;
