import React, { useMemo } from "react";

function CardItem(props) {
  const { img, active, title, desc } = props;

  const renderMain = useMemo(() => {
    return (
      <div
        className={`w-full ${
          active ? "bg-[#0BB885]" : "bg-[#1C243F]"
        } rounded-lg px-1 py-6`}
      >
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
          <img src={img} alt="" />
          <div className={`${active ? "mt-0" : "mt-2"} text-white`}>
            <h1 className="text-base font-semibold">{title}</h1>
            <h2
              className={`text-sm font-medium ${
                active ? "text-white" : "text-[#6C747D]"
              }`}
            >
              {desc}
            </h2>
          </div>
        </div>
      </div>
    );
  }, [active, desc, img, title]);

  return renderMain;
}

export default CardItem;
