import React, { useMemo } from "react";

function Breadcrumbs({ children }) {
  const renderMain = useMemo(() => {
    return <div className="flex flex-row mt-2 text-sm">{children}</div>;
  }, [children]);

  return renderMain;
}

export default Breadcrumbs;
