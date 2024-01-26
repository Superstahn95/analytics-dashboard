import { useState } from "react";
import WidgetWrapper from "./WidgetWrapper";
import { orders } from "../data";
import Download from "/svg/document-download.svg";
import Invoice from "./Invoice";

const tableHeaders = ["Name", "Date", "Amount", "Status", "Invoice"];

function OrderTable() {
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [showOrder, setShowOrder] = useState(false);
  const handleClick = (order) => {
    setOrderReceipt(order);
    setShowOrder(true);
  };
  return (
    <WidgetWrapper>
      <div className="flex items-center justify-between">
        <span className="font-jakarta text-[18px] text-[#26282C] dark:text-white font-bold">
          Last Orders
        </span>
        <span className="font-jakarta text-[18px] text-[#34CAA5]">See All</span>
      </div>
      <table className="w-full mt-2">
        <tr>
          {tableHeaders.map((header) => (
            <th
              key={header}
              className="text-left text-[#9CA4AB] dark:text-white font-jakarta text-[16px] py-2"
            >
              {header}
            </th>
          ))}
        </tr>
        {orders.map((order) => (
          <tr key={order.id} className="border-t  border-[#EDF2F6]">
            <td>
              <div className="flex items-center space-x-3">
                <img src={order.image} alt="user avi" />
                <span className="font-jakarta text-[16px] text-[#3A3F51] dark:text-white py-4">
                  {order.name}
                </span>
              </div>
            </td>
            <td className="font-jakarta text-[16px] text-[#737373] dark:text-white ">
              {order.date}
            </td>
            <td className="font-jakarta text-[#0D062D] dark:text-white text-[16px]">
              {order.amount}
            </td>
            <td
              className={`${
                order.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
              } font-jakarta text-[16px] `}
            >
              {order.status}
            </td>
            <td>
              <button
                onClick={() => handleClick(order)}
                className="flex items-center space-x-1"
              >
                <img src={Download} alt="download" />
                <span className="font-jakarta text-[14px] text-[#0D062D] dark:text-white">
                  View
                </span>
              </button>
            </td>
          </tr>
        ))}
      </table>
      {showOrder && (
        <Invoice setShowOrder={setShowOrder} order={orderReceipt} />
      )}
    </WidgetWrapper>
  );
}

export default OrderTable;
