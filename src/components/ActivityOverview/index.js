import HTMLReactParser from "html-react-parser";
import React, { useMemo } from "react";

const data = [
  {
    title:
      "<b className='font-semibold'>Nick Mark</b> Mentioned<b className='font-semibold'> Sara Smith</b> In NewPost",
    time: "11 JUL 8:10 PM",
  },
  {
    title:
      "The <b className='font-semibold'>Post Name </b>was removed by <b className='font-semibold'>Nick Mark</b>",
    time: "11 JUL 9:10 PM",
  },
  {
    title:
      "<b className='font-semibold'>Patrick Sulivan </b> Published a New Post",
    time: "12 JUL 10:10 PM",
  },

  {
    title:
      "<b className='font-semibold'>240+ users </b> have subscribed to Newsletter #1",
    time: "12 JUL 10:10 PM",
  },

  {
    title:
      "The <b className='font-semibold'>Post Name</b> was suspanded by <b className='font-semibold'>  Nick Mark</b>",
    time: "11 JUL 8:10 PM",
  },
];

function ActivityOverview() {
  const renderMain = useMemo(() => {
    return (
      <>
        <div className="mb-5">
          <h1 className="text-xl font-semibold text-white">
            Activity overview
          </h1>
          <div className="flex flex-row items-center mt-2 mb-5 text-white">
            <img src="/assets/content/arrowup.svg" alt="" />
            <h1 className="text-base font-light">16% this month</h1>
          </div>
        </div>
        {data.map((e, idx) => (
          <div className="flex items-start justify-between" key={idx}>
            <div className="flex flex-row flex-1 w-full gap-4">
              <div className="flex flex-col items-center">
                <div className="w-[21px] h-[21px] rounded-full border-2 border-[#FF814A]"></div>
                <div className="relative w-[1px] grow rounded-full bg-[#5C6CA5]" />
              </div>
              <div className="pb-14">
                <h1 className="text-sm font-light text-[#D3D3D3]">
                  {HTMLReactParser(e.title)}
                </h1>
                <h2 className="text-[#9F9F9F] text-xs font-light">{e.time}</h2>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }, []);

  return renderMain;
}

export default ActivityOverview;
