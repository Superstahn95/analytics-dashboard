//custom tool tip component for my chart
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip relative  bg-[#090C2C] inline-block text-white w-[80px] h-[32px] rounded-md text-center">
        <p className="label">{payload[0].value}</p>
        <div className="info-pointer"></div>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
