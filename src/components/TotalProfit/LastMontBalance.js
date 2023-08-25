import React, { useMemo } from "react";

function LastMontBalance() {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center w-full p-5 gap-14">
        <div className="flex flex-row items-center gap-2 px-5 py-[7px] border border-[#0BB885] rounded-md">
          <h1 className="text-[11px] text-[#0BB885]">2023</h1>
          <div className="w-2 h-2 rotate-45 border-b border-r border-b-[#0BB885] border-r-[#0BB885] -mt-[5px]"></div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">$842.98</h1>
          <p className="text-[11px] text-[#828282] mt-3 font-semibold">
            Latest Month Balance $426.20k
          </p>
        </div>
        <img src="/assets/content/totalprofit2.svg" alt="" />
        <button className="px-5 py-2 bg-[#0BB885] rounded-md text-xs text-white font-semibold">
          View Report
        </button>
      </div>
    );
  }, []);
  return renderMain;
}

export default LastMontBalance;
