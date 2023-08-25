import React, { useMemo } from "react";

function Orders() {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col gap-3 p-5">
        <h1 className="text-[15px] font-medium text-white">Orders</h1>
        <h2 className="text-2xl font-medium text-[#FF814A] mb-7">189K</h2>
        <img src="/assets/content/Chart.svg" alt="" />
      </div>
    );
  }, []);

  return renderMain;
}

export default Orders;
