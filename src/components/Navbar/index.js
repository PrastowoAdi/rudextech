import React, { useMemo } from "react";

function Navbar() {
  const renderMain = useMemo(() => {
    return (
      <nav className="sticky -top-1 w-full h-14 border-b border-b-[#4B5259] py-2 flex flex-row justify-end bg-[#151A2E]/60 backdrop-blur-md">
        <div className="flex flex-row items-center gap-3 px-5 lg:px-10">
          <div className="relative">
            <div className="w-9 h-9 bg-[#B5B4B4] rounded-full border border-white"></div>
            <div className="absolute w-2 h-2 bg-[#5CCC5A] top-1 right-0 rounded-full"></div>
          </div>

          <h1 className="text-sm text-white">Hello, User!</h1>
        </div>
      </nav>
    );
  }, []);

  return renderMain;
}

export default Navbar;
