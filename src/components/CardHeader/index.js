import React, { useMemo } from "react";
import CardItem from "./CardItem";

const data = [
  {
    title: "Total Cost",
    desc: "$31,868",
    img: "/assets/cardHeader/cost.svg",
  },
  {
    title: "Total Sales",
    desc: "$66,053",
    img: "/assets/cardHeader/trophy.svg",
  },
  {
    title: "This Week",
    desc: "$35,000,000",
    img: "/assets/cardHeader/calendar.svg",
  },
  {
    title: "Revenue",
    desc: "$63.00K",
    img: "/assets/cardHeader/revenue.svg",
  },
  {
    title: "$1250",
    desc: "Last payment",
    img: "/assets/cardHeader/lastPayment.svg",
  },
];

function CardHeader() {
  const renderMain = useMemo(() => {
    return (
      <div className="grid w-full grid-cols-2 gap-5 py-5 mt-5 lg:grid-cols-5 lg:gap-5">
        {data.map((item, idx) => (
          <CardItem
            key={idx}
            title={item.title}
            desc={item.desc}
            img={item.img}
            active={item.title === "Total Cost"}
          />
        ))}
      </div>
    );
  }, []);

  return renderMain;
}

export default CardHeader;
