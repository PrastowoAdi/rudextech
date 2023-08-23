import React, { useMemo } from "react";
import Breadcrumbs from "../Breadcrumbs";

function TitleSection() {
  const renderMain = useMemo(() => {
    return (
      <section className="">
        <h1 className="text-xl lg:text-[30px] font-semibold text-white">
          Marketing Dashboard
        </h1>
        <Breadcrumbs>
          <p className="text-[#6C747D]">Home</p>
          <span className="text-[#6C747D] mx-1">/</span>
          <p className="text-[#0BB885]">Dashboard</p>
        </Breadcrumbs>
      </section>
    );
  }, []);

  return renderMain;
}

export default TitleSection;
