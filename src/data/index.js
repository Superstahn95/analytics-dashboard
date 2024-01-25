import BoxTick from "/svg/box-tick.svg";
import Rotate from "/svg/3d-rotate.svg";
import Cart from "/svg/shopping-cart.svg";
import Coin from "/svg/coin.svg";
//orders data source
export const orders = [
  {
    id: 1,
    name: "Marcus Bergson",
    amount: 80000,
    status: "Paid",
    image: "/images/marcus.png",
    date: "Nov 15, 2023",
  },
  {
    id: 2,
    name: "Jaydon Vaccaro",
    amount: 150000,
    status: "Refund",
    image: "/images/jaydon.png",
    date: "Nov 15, 2023",
  },
  {
    id: 3,
    name: "Corey Schleifer",
    amount: 87000,
    status: "Paid",
    image: "/images/corey.png",
    date: "Nov 14, 2023",
  },
  {
    id: 4,
    name: "Cooper Press",
    amount: 100000,
    status: "Refund",
    image: "/images/cooper.png",
    date: "Nov 14, 2023",
  },
  {
    id: 5,
    name: "Phillip Lubin",
    amount: 78000,
    status: "Paid",
    image: "/images/phillip.png",
    date: "Nov 13, 2023",
  },
];

//data source for dashboard analytics
export const dashboardAnalytics = [
  {
    id: 1,
    description: "total order",
    number: 350,
    percentage: 23.5,
    isIncrease: true,
    url: BoxTick,
  },
  {
    id: 2,
    description: "total refund",
    number: 270,
    percentage: 23.5,
    isIncrease: false,
    url: Rotate,
  },
  {
    id: 3,
    description: "average sales",
    number: 1567,
    percentage: 23.5,
    isIncrease: false,
    url: Cart,
  },
  {
    id: 4,
    description: "total income",
    number: 350,
    percentage: 23.5,
    isIncrease: true,
    url: Coin,
  },
];

//sales data
export const salesData = [
  { month: "Jan", amount: 8000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 3000 },
  { month: "Apr", amount: 23000 },
  { month: "Mei", amount: 8000 },
  { month: "Jun", amount: 45000 },
  { month: "Jul", amount: 8000 },
  { month: "Aug", amount: 16000 },
  { month: "Sep", amount: 40000 },
  { month: "Okt", amount: 4000 },
  { month: "Nov", amount: 30000 },
  { month: "Des", amount: 25000 },
];
