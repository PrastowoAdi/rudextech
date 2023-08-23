import React, { useMemo } from "react";

function MenuItem(props) {
  const { href, img, title, active } = props;
  const renderMain = useMemo(() => {
    return (
      <a
        href={href}
        className={`relative flex justify-center lg:justify-start gap-2 rounded-lg lg:py-4 lg:px-3 ${
          active ? "bg-[#1F2849" : null
        }] p-1 items-center`}
      >
        <img src={img} alt="icon-img" className="w-7 md:w-7 lg:w-5" />
        <p className="hidden lg:block text-[#6C747D] font-medium text-base">
          {title}
          <span
            className={`${
              title !== "Notifications" && "hidden"
            } lg:ml-10 text-xs text-[#151A2E] bg-[#98FFE0] px-[10px] py-[6px] rounded-md`}
          >
            1
          </span>
        </p>
      </a>
    );
  }, [active, href, img, title]);

  return renderMain;
}

export default MenuItem;
