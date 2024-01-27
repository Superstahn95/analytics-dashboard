//custom curved bar component for my chart
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

export default CustomBar;
