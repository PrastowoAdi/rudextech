import React, { useMemo } from "react";

function Profit() {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col gap-3 p-5">
        <h1 className="text-[15px] font-medium text-white">Profit</h1>
        <h2 className="text-2xl font-medium text-[#0BB885] mb-3">8,24K</h2>
        <img src="/assets/content/profit.svg" alt="" />
      </div>
    );
  }, []);

  return renderMain;
}

export default Profit;
