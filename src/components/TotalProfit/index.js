import React, { useMemo } from "react";

function TotalProfit() {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col gap-6 p-5">
        <div className="flex flex-row items-center justify-between text-white">
          <h1 className="text-[15px] font-bold">Total Profit</h1>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0BB885] ml-1"></div>
              <h1 className="text-[#828282] text-xs">Earnings</h1>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF814A] ml-1"></div>
              <h1 className="text-[#828282] text-xs">Expanse</h1>
            </div>
          </div>
        </div>
        <img src="/assets/content/totalprofit.svg" alt="" className="w-full" />
      </div>
    );
  }, []);

  return renderMain;
}

export default TotalProfit;
