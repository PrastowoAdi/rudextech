import React, { useMemo } from "react";

function Earnings() {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col gap-6 p-5">
        <div className="flex flex-row items-center justify-between text-white">
          <h1 className="text-[15px] font-bold">Earnings</h1>
          <div className="flex flex-row gap-4">
            <h2 className="text-[#2E4B85] text-sm">This Week</h2>
            <div className="w-[10px] h-[10px] rotate-45 border-b border-r border-b-[#888FA1] border-r-[#888FA1]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:items-center lg:flex-row">
          <img
            src="/assets/content/earnings.svg"
            alt=""
            className="w-2/3 mx-auto md:w-1/3 lg:w-1/2 lg:mx-0"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0BB885] ml-1"></div>
                <div className="">
                  <h1 className="text-sm font-medium text-white">
                    Total Sales
                  </h1>
                  <h2 className="text-[#8A92A6] text-sm font-medium">251K</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF814A] ml-1"></div>
                <div className="">
                  <h1 className="text-sm font-medium text-white">
                    Total Orders
                  </h1>
                  <h2 className="text-[#8A92A6] text-sm font-medium">176K</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  return renderMain;
}

export default Earnings;
