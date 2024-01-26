import WidgetWrapper from "./WidgetWrapper";
import { XCircleIcon } from "@heroicons/react/24/outline";

function Invoice({ order, setShowOrder }) {
  console.log(order);
  return (
    <div className="fixed  top-0 left-0 w-screen h-screen z-[1999] bg-black/40 flex items-center justify-center font-jakarta">
      <WidgetWrapper>
        <div className="w-full md:w-[600px]">
          <div className="mb-2">
            {" "}
            <h2 className="text-[#34CAA5] text-xl font-bold font-jakarta">
              Invoice Details
            </h2>
          </div>
          <div className="mb-2">
            <h3 className="font-bold">Customer name</h3>
            <span>{order?.name}</span>
          </div>
          <div className="mb-2">
            <h3 className="font-bold">Amount</h3>
            <span>{order?.amount}</span>
          </div>
          <div className="mb-2">
            <h3 className="font-bold">Order Date</h3>
            <span>{order?.date}</span>
          </div>
          <div className="mb-2">
            <h3 className="font-bold">Status</h3>
            <span>{order?.status}</span>
          </div>
        </div>
        <button
          onClick={() => setShowOrder(false)}
          className="p-1 bg-[#34CAA5] rounded-md text-white w-[6rem]"
        >
          Exit
        </button>
      </WidgetWrapper>
    </div>
  );
}

export default Invoice;
