import ArrowRight from "/svg/arrow-right.svg";
import Setting from "/svg/setting-2.svg";
import Logout from "/svg/logout.svg";

const controls = [
  { id: 1, url: ArrowRight },
  { id: 2, url: Setting },
  { id: 3, url: Logout },
];

function Controls() {
  return (
    <div>
      <ul className="flex flex-col items-center justify-center space-y-5 ">
        {controls.map((control) => (
          <li key={control.id}>
            <img src={control.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Controls;
