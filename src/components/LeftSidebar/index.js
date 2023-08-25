import React, { useMemo } from "react";
import MenuItem from "./MenuItem";

const dataMenu = [
  {
    title: "Home",
    img: "/assets/sidebar/home.svg",
  },
  {
    title: "Reports",
    img: "/assets/sidebar/reports.svg",
  },
  {
    title: "Notifications",
    img: "/assets/sidebar/notifications.svg",
  },
  {
    title: "Settings",
    img: "/assets/sidebar/settings.svg",
  },
  {
    title: "Logout",
    img: "/assets/sidebar/logout.svg",
  },
];

function LeftSideBar() {
  const renderMain = useMemo(() => {
    return (
      <section className="bg-[#171E37] h-full lg:p-5 px-3 py-4 fixed z-50">
        <div className="flex flex-row items-center justify-center gap-3 mb-10 lg:justify-start">
          <img src="/assets/logo.svg" alt="" className="w-8 lg:w-7" />
          <h1 className="hidden text-sm font-semibold text-white md:block">
            Inter-act
          </h1>
        </div>
        <div className="flex w-full flex-1 flex-col gap-6 pt-[30px]">
          {dataMenu.map((item, idx) => (
            <MenuItem
              key={idx}
              title={item.title}
              img={item.img}
              active={item.title === "Home"}
            />
          ))}
        </div>
      </section>
    );
  }, []);

  return renderMain;
}

export default LeftSideBar;
